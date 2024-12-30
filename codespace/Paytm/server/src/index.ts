import express, { Express, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt, { sign, verify } from "jsonwebtoken";

dotenv.config();
const app: Express = express();
app.use(cors());
app.use(bodyParser.json());
const prisma = new PrismaClient();

const secret: string = process.env.SECRET_KEY || "default-secret-key";
console.log(secret);

app.post("/api/signup", async (req: Request, res: Response) => {

    try {

        const { username, email, password, confirm } = req.body;

        if (!username || !email || !password || !confirm) {
            res.status(400).send({ msg: "invalid or missing headers" });
        } else {

            if (password !== confirm) {
                res.status(400).send({ msg: "password must be same" })
            } else {

                let found = await prisma.user.findUnique({
                    where: { username: username, email: email }
                })
                if (found) {
                    res.status(409).send({ msg: "user already exist" });
                } else {

                    const hash: string = bcrypt.hashSync(password, 10);
                    const balance: number = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
                    await prisma.user.create({
                        data: {
                            username,
                            email,
                            password: hash,
                            balance
                        }
                    }).then(() => {
                        res.status(201).send({ path: "/api/login", msg: "user created sucessfully" })
                    }).catch((err) => {
                        res.status(400).send(err)
                    })
                }
            }
        }
    } catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }

});



app.post("/api/login", async (req: Request, res: Response) => {

    try {

        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            res.status(400).send({ msg: "invalid or missing headers" })
        } else {
            let found = await prisma.user.findUnique({
                where: { email: email, username: username }
            });

            if (found) {
                let check = await bcrypt.compare(password, found.password);
                if (check) {
                    let Sign = jwt.sign({ username: found.username, email: found.email, id: found.id }, secret);
                    res.status(200).send({ msg: "login sucess", token: Sign });
                } else {
                    res.status(401).send({ msg: "incorrect username or password" });
                }
            } else {
                res.status(404).send({ msg: "user not found" });
            }

        }

    } catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }

})


app.post("/api/profile", async (req: Request, res: Response) => {

    try {

        const { token } = req.body;
        if (!token) {
            res.status(400).send({ msg: "invalid or missing headers" });
        } else {
            jwt.verify(token, secret, (err: any, dec: any) => {
                if (err) {
                    res.status(403).send({ msg: "invalid token" })
                } else {
                    const user = {
                        username: dec.username,
                        id: dec.id,
                    }

                    res.status(200).send({ user: user, path: "/profile" });
                }
            })
        }
    } catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }
});


app.post("/api/balance", async (req: Request, res: Response) => {

    try {

        const { token } = req.body;
        if (!token) {
            res.status(400).send({ msg: "invalid or missing headers" });
        } else {
            jwt.verify(token, secret, async (err: any, dec: any) => {
                if (err) {
                    res.status(403).send({ msg: "invalid token" })
                } else {
                    let mybal = await prisma.user.findUnique({
                        where: { username: dec.username, email: dec.email }
                    });

                    if (mybal) {
                        res.status(200).send({ balance: mybal.balance });
                    } else {
                        res.status(400).send({ msg: "something went wrong" });
                    }
                }
            })
        }
    } catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }
});


app.get("/api/users", async (req: Request, res: Response) => {

    try {

        await prisma.user.findMany({
            select: { username: true }
        }).then((resp: any) => {
            res.status(200).send(resp)
        }).catch((err) => {
            res.status(400).send({ msg: err });
        })
    } catch (error: any) {
        res.status(500).send({ msg: "something went wrong" });
    }

})


app.listen(4444, () => console.log(`Listening => http://localhost:4444`));


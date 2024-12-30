"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
const prisma = new client_1.PrismaClient();
const secret = process.env.SECRET_KEY || "default-secret-key";
console.log(secret);
app.post("/api/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, confirm } = req.body;
        if (!username || !email || !password || !confirm) {
            res.status(400).send({ msg: "invalid or missing headers" });
        }
        else {
            if (password !== confirm) {
                res.status(400).send({ msg: "password must be same" });
            }
            else {
                let found = yield prisma.user.findUnique({
                    where: { username: username, email: email }
                });
                if (found) {
                    res.status(409).send({ msg: "user already exist" });
                }
                else {
                    const hash = bcrypt_1.default.hashSync(password, 10);
                    const balance = Math.floor(Math.random() * (5000 - 2000 + 1) + 2000);
                    yield prisma.user.create({
                        data: {
                            username,
                            email,
                            password: hash,
                            balance
                        }
                    }).then(() => {
                        res.status(201).send({ path: "/api/login", msg: "user created sucessfully" });
                    }).catch((err) => {
                        res.status(400).send(err);
                    });
                }
            }
        }
    }
    catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }
}));
app.post("/api/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            res.status(400).send({ msg: "invalid or missing headers" });
        }
        else {
            let found = yield prisma.user.findUnique({
                where: { email: email, username: username }
            });
            if (found) {
                let check = yield bcrypt_1.default.compare(password, found.password);
                if (check) {
                    let Sign = jsonwebtoken_1.default.sign({ username: found.username, email: found.email, id: found.id }, secret);
                    res.status(200).send({ msg: "login sucess", token: Sign });
                }
                else {
                    res.status(401).send({ msg: "incorrect username or password" });
                }
            }
            else {
                res.status(404).send({ msg: "user not found" });
            }
        }
    }
    catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }
}));
app.post("/api/profile", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        if (!token) {
            res.status(400).send({ msg: "invalid or missing headers" });
        }
        else {
            jsonwebtoken_1.default.verify(token, secret, (err, dec) => {
                if (err) {
                    res.status(403).send({ msg: "invalid token" });
                }
                else {
                    const user = {
                        username: dec.username,
                        id: dec.id,
                    };
                    res.status(200).send({ user: user, path: "/profile" });
                }
            });
        }
    }
    catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }
}));
app.post("/api/balance", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.body;
        if (!token) {
            res.status(400).send({ msg: "invalid or missing headers" });
        }
        else {
            jsonwebtoken_1.default.verify(token, secret, (err, dec) => __awaiter(void 0, void 0, void 0, function* () {
                if (err) {
                    res.status(403).send({ msg: "invalid token" });
                }
                else {
                    let mybal = yield prisma.user.findUnique({
                        where: { username: dec.username, email: dec.email }
                    });
                    if (mybal) {
                        res.status(200).send({ balance: mybal.balance });
                    }
                    else {
                        res.status(400).send({ msg: "something went wrong" });
                    }
                }
            }));
        }
    }
    catch (err) {
        res.status(500).send({ msg: "something went wrong" });
    }
}));
app.get("/api/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield prisma.user.findMany({}).then((resp) => {
            res.status(200).send(resp);
        }).catch((err) => {
            res.status(400).send({ msg: err });
        });
    }
    catch (error) {
        res.status(500).send({ msg: "something went wrong" });
    }
}));
app.listen(4444, () => console.log(`Listening => http://localhost:4444`));

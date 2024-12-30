import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [alert, setAlert] = useState<string>("");
    const [time, setTime] = useState<boolean>(false);

    const navigate = useNavigate();

    const Log = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4444/api/login", { username, email, password });
            if (response) {
                localStorage.setItem("token", response.data.token);
                navigate("/profile");
            }
        } catch (error: any) {
            setAlert(error.response.data.msg);
            setTime(true);
        }


    }

    useEffect(() => {
        setTimeout(() => {
            setTime(false)
        }, 2000);
    }, [time])

    return (

        <>
            <form action="/profile" onSubmit={(e) => Log(e)}>
                <div className="h-screen w-screen bg-black flex justify-center items-center">
                    <div className="input text-center w-[80%]">
                        <h1 className='text-white text-4xl 2xl:text-6xl'>Login</h1><br />
                        <input type="text" placeholder='Username' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={username} onChange={(e) => setUsername(e.target.value)} required /><br />
                        <input type="email" placeholder='Email' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
                        <input type="password" placeholder='Password' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
                        <button className="bg-green-600 text-white h-20 w-full text-2xl rounded-md hover:bg-green-800">Login</button>
                    </div>
                    {
                        time ? (

                            <div className="alert-container p-5 w-[200px] bg-red-700 absolute text-center top-[5vh] rounded-md">
                                <p className="text-white">{alert}</p>
                            </div>
                        ) : null
                    }
                </div>
            </form>


        </>

    )
}

export default Login;

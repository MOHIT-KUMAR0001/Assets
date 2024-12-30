import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");

    const Navigate = useNavigate();

    const Sign = async (e: any) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:4444/api/signup", { username, email, password, confirm });
        if (response) {
            Navigate(response.data.path);
        }
    }

    return (

        <>
            <form action="/login" onSubmit={(e) => Sign(e)}>
                <div className="h-screen w-screen bg-black flex justify-center items-center">
                    <div className="input text-center w-[80%]">
                        <h1 className='text-white text-4xl 2xl:text-6xl'>Signup</h1><br />
                        <input type="text" placeholder='Username' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={username} onChange={(e) => setUsername(e.target.value)} required/><br />
                        <input type="email" placeholder='Email' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={email} onChange={(e) => setEmail(e.target.value)} required/><br />
                        <input type="password" placeholder='Password' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={password} onChange={(e) => setPassword(e.target.value)} required/><br />
                        <input type="password" placeholder='Confirm' className='p-5 bg-slate-400 rounded-md w-full block box-border focus:outline-none text-black text-2xl placeholder:text-black' value={confirm} onChange={(e) => setConfirm(e.target.value)} required/><br />
                        <button className="bg-green-600 text-white h-20 w-full text-2xl rounded-md">Signup</button>
                    </div>
                </div>
            </form>

        </>

    )
}

export default Signup;

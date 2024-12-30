import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Dash = () => {

    const [username, setUsername] = useState<string>("");

    const navigate = useNavigate();

    const Fecher = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            const response = await axios.post("http://localhost:4444/api/profile", {
                token
            });

            if (response) {
                setUsername(response.data.user.username);
            }
        } else {
            navigate("/api/login");
        }

    }

    useEffect(() => {
        Fecher();
    }, [])

    return (
        <>
            <div className="h-screen w-screen bg-black flex justify-center items-center">
                <div className="content text-center">
                    <h1 className="text-green-600 text-4xl font-bold 2xl:text-6xl">Hello!</h1>
                    <p className="text-white text-2xl 2xl:text-4xl">{username}</p>
                    <div className="mybuttons flex justify-center gap-5 box-border m-10 flex-col 2xl:flex-row">

                        <div className="buttons p-5 w-[250px] bg-green-400 rounded-md hover:bg-green-600" onClick={()=>navigate("/balance")}>
                            <p className="text-white text-2xl m-5">Check Balance</p>
                            <i className='text-white text-4xl bx bxs-wallet-alt'></i>
                        </div>

                        <div className="buttons p-5 w-[250px] bg-green-400 rounded-md hover:bg-green-600" onClick={()=>navigate("/history")}>
                            <p className="text-white text-2xl m-5">Recent Transaction</p>
                            <i className='text-white text-4xl bx bxs-bank' ></i>
                        </div>

                        <div className="buttons p-5 w-[250px] bg-green-400 rounded-md hover:bg-green-600" onClick={()=>navigate("/send")}>
                            <p className="text-white text-2xl m-5">Send Money</p>
                            <i className='text-white text-4xl bx bxs-badge-dollar' ></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash;

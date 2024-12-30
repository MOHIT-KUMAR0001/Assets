import axios from "axios";
import { useEffect, useState } from "react";

const Balance = () => {

    const [balance, setBalance] = useState<number>(0);

    const Fecher = async () => {
        let token = localStorage.getItem("token");

        try {
            const response = await axios.post("http://localhost:4444/api/balance", { token });
            if (response) {
                setBalance(response.data.balance);
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        Fecher();
    }, []);


    return (
        <>
            <div className="h-screen w-screen bg-black flex justify-center items-center">
                <span className="text-white text-4xl 2xl:text-6xl">Current Balance:{balance}</span>
            </div>
        </>
    )
}

export default Balance;
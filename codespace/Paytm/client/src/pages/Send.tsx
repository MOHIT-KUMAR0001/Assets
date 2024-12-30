import axios from "axios";
import { useState } from "react";

const Send = () => {

    interface mytype {
        
    }

    const [user,setUser] = useState<
    const Fecher = async () => {

        try {
            const response = await axios.get("http://localhost:4444/api/users");
            if (response) {

            }
        } catch (error: any) {
            console.log(error.response.msg);
        }
    }

    return (

        <div className="h-screen w-screen bg-black flex justify-center">

{

}

            <div className="users-container p-[50px]">
                <div className="user flex w-[80vw] gap-5">
                    <div className="box p-[10px] w-[80vw] rounded-md bg-white">person 1</div>
                    <button className="h-[50px] w-[150px] bg-green-500 text-white text-2xl 2xl:text-3xl rounded-md">send</button>
                </div>
            </div>
        </div>
    )
}

export default Send;


import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


const Home = () => {

    const Navigate = useNavigate();

    return (

        <>
            <div className="h-screen w-screen bg-black flex justify-center items-center">
                <div className="my-box text-center">
                    <h1 className="text-4xl text-white p-5 2xl:text-6xl 2xl:p-10">Welcome to <i className="text-green-600">#HashPay</i></h1>
                    <div className="button-container flex gap-5 justify-center">
                        <Button btnTitle="Signup" Submit={() => Navigate("/api/signup")} />
                        <Button btnTitle="Login" Submit={() => Navigate("/api/login")} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;

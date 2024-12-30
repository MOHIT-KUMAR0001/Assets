const Login = () => {
    return (
        <>
            <div className="login-container h-screen flex justify-center items-center">
                <div className="login-bar my-bg  rounded-md w-[80%] flex justify-center items-center flex-col p-5">
                    <div className="field w-[100%] p-2">
                        <label htmlFor="email" className="text-2xl block mb-[10px]">Email</label>
                        <input type="text" placeholder="Email" className="block border-none  rounded-md w-full p-3 focus:outline-none text-xl" />

                    </div>
                    <div className="field w-[100%] p-2">
                        <label htmlFor="password" className="text-2xl block mb-[10px]">Password</label>
                        <input type="text" placeholder="Email" className="block border-none  rounded-md w-full p-3 focus:outline-none text-xl" />
                    </div>
                    <button className="p-3 text-white bg-black rounded-md mt-5 text-2xl w-full">Login</button>
                </div>
            </div>
        </>
    )
}

export default Login;




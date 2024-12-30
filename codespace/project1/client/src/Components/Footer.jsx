import brand from "../assets/brand.png"
import one from "../assets/one.svg"
import second from "../assets/two.svg"
import three from "../assets/three.svg"
import four from "../assets/four.svg"

const Footer = () => {
    return (
        <>
            <div className="services relative">
                <div className="content flex justify-around items-center p-5 bg-slate-200 h-[40vh]">
                    <h1 className="text-4xl font-bold">SEE <span>BEST SERVICES</span> FOR <br /> YOUR SOLUTION</h1>
                    <div className="para">
                        <p className="text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, sapiente. <br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quas. <br /> Lorem ipsum dolor sit amet.</p>
                        <button className="text-2xl bg-black rounded-md text-white p-3 mt-2">Contact Us</button>
                    </div>
                </div>


                <div className="my-cards rounded-md p-5 flex justify-around absolute top-[28%]">
                    <div className="box flex flex-col items-center bg-slate-100 w-[20%] py-5 px-3 gap-2 rounded-md">
                         <img src={one} alt="svg" className="h-[50px] w-[50px]" />
                        <h2 className="text-3xl">heading</h2>
                        <p className="text-center text-xl">Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Culpa, voluptate?</p>
                    </div>

                    <div className="box flex flex-col items-center bg-slate-100 w-[20%] py-5 px-3 gap-2 rounded-md">
                         <img src={second} alt="svg" className="h-[50px] w-[50px]" />
                        <h2 className="text-3xl">heading</h2>
                        <p className="text-center text-xl">Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Culpa, voluptate?</p>
                    </div>

                    <div className="box flex flex-col items-center bg-slate-100 w-[20%] py-5 px-3 gap-2 rounded-md">
                         <img src={three} alt="svg" className="h-[50px] w-[50px]" />
                        <h2 className="text-3xl">heading</h2>
                        <p className="text-center text-xl">Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Culpa, voluptate?</p>
                    </div>

                    <div className="box flex flex-col items-center bg-slate-100 w-[20%] py-5 px-3 gap-2 rounded-md">
                         <img src={four} alt="svg" className="h-[50px] w-[50px]" />
                        <h2 className="text-3xl">heading</h2>
                        <p className="text-center text-xl">Lorem, ipsum dolor sit amet consectetur  adipisicing elit. Culpa, voluptate?</p>
                    </div>
                </div>



                <div className="content flex justify-around items-center p-5 mt-[30vh]">
                    <div className="right flex flex-col gap-3">
                        <div className="brand">
                            <img src={brand} alt="brand" />
                        </div>
                        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, veniam! <br />Lorem ipsum dolor sit amet.</p>
                        <div className="links text-2xl flex gap-4">

                            <a href="http://facebook.com">
                                <i class="ri-facebook-circle-fill"></i>
                            </a>
                            <a href="http://twitter.com">
                                <i class="ri-twitter-fill"></i>
                            </a>

                            <a href="http://instagram.com">
                                <i class="ri-instagram-line"></i>
                            </a>

                            <a href="http://linkedin.com">
                                <i class="ri-linkedin-box-fill"></i>
                            </a>

                            <a href="http://youtube.com">
                                <i class="ri-youtube-fill"></i>
                            </a>
                        </div>
                    </div>

                    <div className="items flex list-none gap-5 text-xl">
                        <li>Home</li>
                        <li>Booking</li>
                        <li>About</li>
                        <li>Cars</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer 
import Navbar from "../Components/Navbar"
import main from "../assets/main.webp";
import car2 from "../assets/car2.webp";
import car3 from "../assets/car3.jpg";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";
// import car4 from "../assets/car4.webp";

const Home = () => {

    const [ess, setEss] = useState("$29.50");
    const [rec, setRec] = useState("$44.40");
    const [pro, setPro] = useState("$70.50");
    const [year, setYearly] = useState(false);

    let yearly = {
        essential: "$359.50",
        recommended: "$534.40",
        pro: "$870.50"
    }

    let monthly = {
        essential: "$59.50",
        recommended: "$34.40",
        pro: "$80.50"
    }


    const Plans = () => {

        if (year){
            setEss(monthly.essential);
            setRec(monthly.recommended);
            setPro(monthly.pro);
            setYearly(false)
        }else{
            setEss(yearly.essential);
            setRec(yearly.recommended);
            setPro(yearly.pro);
            setYearly(true)
        }
    }


    return (
        <>
            <div className="home-bar flex justify-center pt-[20vh] main h-[50vh] font-bold">
                <div className="content">
                    <h1 className="text-6xl text-black text-center heading">Find Your <span>Rental Car</span></h1>
                    <p className="text-center mt-[20px] text-2xl">We have many best rental car collections.</p>
                </div>
            </div>


            <div class="container mx-auto px-4 py-12 lg:absolute top-[45vh] lg:left-1/2 lg:transform lg:-translate-x-1/2 ">
                <form class="bg-white p-12 rounded-lg shadow-md">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">


                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="vehicle-type">Vehicle Type</label>
                            <select id="vehicle-type" class="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200">
                                <option>Select Vehicle Type</option>
                                <option>Sedan</option>
                                <option>SUV</option>
                                <option>Hatchback</option>
                            </select>
                        </div>


                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="pickup-location">Picking Up Location</label>
                            <input id="pickup-location" type="text" placeholder="Airport or anywhere" class="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200" />
                        </div>


                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="pickup-date">Picking Up Date</label>
                            <input id="pickup-date" type="date" class="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200" />
                        </div>


                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2" for="return-date">Returning Date</label>
                            <input id="return-date" type="date" class="w-full px-4 py-2 border rounded focus:ring focus:ring-blue-200" />
                        </div>
                    </div>


                    <div class="mt-6">
                        <button type="submit" class="w-full bg-gray-800 text-white py-3 rounded hover:bg-green-500 transition font-bold">
                            FIND YOUR CAR
                        </button>
                    </div>
                </form>
            </div>

            <div className="process p-2 lg:mt-[20vh]">
                <h1 className="text-4xl text-center font-bold">OUR RENTING <span>PROCESS</span></h1>

                <div className="container">
                    <div className="row text-center mt-[10vh] p-5">

                        <div className="col-6 col-lg-3 text-xl">
                            <div className="dot bg-green-400 rounded-full h-[20px] w-[20px]"></div>
                            <h1 className="font-bold">CHOOSE A VEHICLE</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>

                        <div className="col-6 col-lg-3 text-xl">

                            <div className="dot bg-green-400 rounded-full h-[20px] w-[20px]"></div>
                            <h1 className="font-bold">CHOOSE A VEHICLE</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-6 col-lg-3 text-xl">

                            <div className="dot bg-green-400 rounded-full h-[20px] w-[20px]"></div>
                            <h1 className="font-bold">CHOOSE A VEHICLE</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="col-6 col-lg-3 text-xl">

                            <div className="dot bg-green-400 rounded-full h-[20px] w-[20px]"></div>
                            <h1 className="font-bold">CHOOSE A VEHICLE</h1>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="cars">
                <div className="cars-heading">
                    <h1 className="text-4xl font-bold text-center mt-[10vh]">CARS FOR <span>RENTAL</span></h1>
                </div>

                <div className="container">
                    <div className="slider mt-[5vh]">
                        <div className="row">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-[80vw] h-[60vh]" src={main} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={car2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={car3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container h-[30vh] flex justify-center items-center flex-col p-5 gap-2">
                <i class='bx bxs-quote-single-left text-6xl text-green-400'></i>
                <p className="text-center text-4xl ">Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.</p>
                <h3 className="font-bold text-2xl">Albert Schweitzer</h3>
            </div>


            <div className="container mt-[10vh] mb-[10vh]">
                <div className="pricing flex justify-center flex-col items-center gap-5">
                    <h1 className="text-4xl font-bold">SEE OUR PRICING <span>PLAN</span></h1>

                    <div className="button flex items-center gap-2">
                        <span id="month" className="text-2xl">monthly</span>
                        <div class="form-check form-switch inline-block" onClick={Plans}>
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <span id="year" className="text-2xl">Yearly</span>
                    </div>


                    <div className="flex gap-5 list-none">
                        <div className="pricing-card w-[20vw] my-bg p-5 rounded-md flex flex-col gap-5 justify-center">
                            <h3 className="text-4xl font-bold">Save by choosing our best plan</h3>
                            <p className="text-2xl">Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="pricing-card w-[20vw] border-black border-2 p-5 rounded-md flex flex-col items-center gap-2 text-xl">
                            <h3 className="text-2xl font-bold">Essential</h3>
                            <h3 className="text-4xl font-bold ">{ess}</h3>
                            <li><i class='bx bx-check'></i>Basic insurance</li>
                            <li><i class='bx bx-check'></i>Standard mileage</li>
                            <li><i class='bx bx-check'></i>Economy cars</li>
                            <li><i class='bx bx-check'></i>GPS optional</li>
                            <li><i class='bx bx-check'></i>Roadside support</li>
                            <li><i class='bx bx-check'></i>Fixed booking</li>
                            <button className="p-3 bg-black text-white rounded-md mt-[2vh] hover:bg-green-400">Choose Plan</button>
                        </div>
                        <div className="pricing-card w-[20vw] border-black border-2 p-5 rounded-md flex flex-col items-center gap-2 text-xl">
                            <h3 className="text-2xl font-bold">Recommented</h3>
                            <h3 className="text-4xl font-bold ">{rec}</h3>
                            <li><i class='bx bx-check'></i>Premium insurance</li>
                            <li><i class='bx bx-check'></i>Free upgrades</li>
                            <li><i class='bx bx-check'></i>Luxury cars</li>
                            <li><i class='bx bx-check'></i>Complimentary GPS</li>
                            <li><i class='bx bx-check'></i>VIP support</li>
                            <li><i class='bx bx-check'></i>Flexible bookings</li>
                            <button className="p-3 bg-black text-white rounded-md mt-[2vh] hover:bg-green-400">Choose Plan</button>
                        </div>
                        <div className="pricing-card w-[20vw] border-black border-2 p-5 rounded-md flex flex-col items-center gap-2 text-xl">
                            <h3 className="text-2xl font-bold">Pro</h3>
                            <h3 className="text-4xl font-bold ">{pro}</h3>
                            <li><i class='bx bx-check'></i>Full coverage</li>
                            <li><i class='bx bx-check'></i>Unlimited mileage</li>
                            <li><i class='bx bx-check'></i>Mid-size cars</li>
                            <li><i class='bx bx-check'></i>GPS included</li>
                            <li><i class='bx bx-check'></i>Priority support</li>
                            <li><i class='bx bx-check'></i>Flexible cancellation</li>
                            <button className="p-3 bg-black text-white rounded-md mt-[2vh] hover:bg-green-400">Choose Plan</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home; 
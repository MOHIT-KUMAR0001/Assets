import Navbar from "../Components/Navbar";
import about from "../assets/blog3.jpg"
import about2 from "../assets/blog2.jpg"
import Bar from "../Components/Bar";

const About = () => {

    return (
        <>

            <Bar Heading="ABOUT US" />
            <div className="about-section mb-[10vh] mt-[5vh]">

                <div className="h-[40vh] box-border p-5 flex justify-center ">
                    <div className="flex items-center justify-around w-[80%]">
                        <img src={about} alt="about" />
                        <div className="content w-[40%]">
                            <h3 className="text-4xl font-bold tracking-wide mb-3">WHO ARE <span>We?</span></h3>
                            <p className="text-xl text-gray-500">The beginning of our journey vel tellus Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero. Ultricies quam nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet cursus ac faucibus sit libero.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[40vh] box-border p-5 flex justify-center ">
                    <div className="flex items-center justify-around w-[80%]">
                        <div className="content w-[40%]">
                            <h3 className="text-4xl font-bold tracking-wide mb-3">CHOOSE US FOR <span>BEST SERVICE</span></h3>
                            <p className="text-xl text-gray-500">We are nunc, lorem sit lorem urna, pretium aliquam ut. In vel, quis donec dolor id in. Pulvinar commodo mollis diam sed facilisis at magna imperdiet cursus ac faucibus sit libero. Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi. Consequat pharetra at magna imperdiet cursus ac faucibus sit libero.</p>
                        </div>
                        <img src={about2} alt="about" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default About;


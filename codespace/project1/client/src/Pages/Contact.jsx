import Bar from "../Components/Bar"

const Contact = () => {
    return (
        <>
            <Bar Heading="Contact Us" />
            <div className="content1 flex justify-around mt-[10vh] mb-[10vh]">
                <div className="right flex flex-col gap-3">
                    <h1 className="text-4xl font-bold">CONTACT INFORMATION</h1>
                    <p className="text-xl">Tortor dignissim convallis aenean et tortor at risus viverra adipiscing.</p>

                    <div>
                        <h3 className="text-2xl font-bold">HEAD OFFICE</h3>
                        <p className="text-xl">730 Glenstone Ave 65802, Springfield, US</p><br />
                        <p className="text-xl">+123 987 321 , +123 123 654 <br />
                            gocar@templatesjungle.com
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">BRANCH OFFICE</h3>
                        <p className="text-xl">730 Glenstone Ave 65802, Springfield, US</p><br />
                        <p className="text-xl">+123 987 321 , +123 123 654 <br />
                            gocar@templatesjungle.com
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold">SOCIAL INFO</h3><br />
                        <div className="links">
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
                    </div>
                </div>



                <div className="left flex flex-col gap-3">
                    <h1 className="text-4xl font-bold">GOT ANY QUESTIONS?</h1>
                    <p className="text-xl">Use the form below to get in touch with us.</p>
                    <div className="inputs1 flex gap-3">
                        <input type="text" placeholder="Write Your Name Here" className="border-1 border-black rounded-md p-2"/>
                        <input type="text" placeholder="Write Your Email Here" className="border-1 border-black rounded-md p-2"/>
                    </div>
                <div className="input2 flex flex-col gap-3">
                    <input type="text" className="border-1 border-black p-2 rounded-md" placeholder="Phone Number"/>
                    <input type="text" className="border-1 border-black p-2 rounded-md" placeholder="Write Your Subject Here"/>
                    <textarea name="txt" id="txt" className="border-1 border-black rounded-md h-[150px] box-border p-2" placeholder="Write Your Message Here "></textarea>
                    <button className="bg-black p-3 text-white rounded-md font-bold text-xl ">SUBMIT</button>
                </div>
                </div>
            </div>


            <div className="content2 flex justify-around p-3 mb-[10vh]">
                <div className="sec1 flex flex-col gap-2 p-3 box-border justify-center">
                    <h3 className="text-2xl font-bold">USA</h3>
                        <p className="text-xl mb-2">730 Glenstone Ave 65802, Springfield, US</p>
                        <p className="text-xl mb-2">+123 987 321 , +123 123 654</p>
                        <p className="text-xl mb-2">gocar@templatesjungle.com</p>
                </div>

                <div className="sec2 flex flex-col gap-2 px-5 box-border border-r-2 border-black border-l-2 justify-center">
                    <h3 className="text-2xl font-bold">FRANCE</h3>
                        <p className="text-xl mb-2">730 Glenstone Ave 65802, Springfield, US</p>
                        <p className="text-xl mb-2">+123 987 321 , +123 123 654</p>
                        <p className="text-xl mb-2">gocar@templatesjungle.com</p>
                </div>

                <div className="sec3 flex flex-col gap-2 p-3 box-border border-black justify-center">
                    <h3 className="text-2xl font-bold">OFFICE</h3>
                        <p className="text-xl mb-2">730 Glenstone Ave 65802, Springfield, US</p>
                        <p className="text-xl mb-2">+123 987 321 , +123 123 654</p>
                        <p className="text-xl mb-2">gocar@templatesjungle.com</p>
                </div>
            </div>
        </>
    )
}

export default Contact
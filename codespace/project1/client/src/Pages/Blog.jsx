import Bar from "../Components/Bar"
import car from "../assets/blog2.jpg"

const Blog = () => {


    const contentArray = [
        {
            heading: "Introduction to JavaScript",
            paragraph: "JavaScript is a versatile programming language used to create interactive effects within web browsers."
        },
        {
            heading: "The Importance of HTML",
            paragraph: "HTML is the backbone of web development, providing the basic structure for web pages."
        },
        {
            heading: "CSS for Styling",
            paragraph: "CSS enhances the appearance of websites by allowing developers to apply styles and layouts."
        },
        {
            heading: "Understanding Flexbox",
            paragraph: "Flexbox is a powerful layout module that provides a way to align and distribute items within a container."
        },
        {
            heading: "Responsive Web Design",
            paragraph: "Responsive design ensures that web pages look great on devices of all sizes."
        },
        {
            heading: "The Role of APIs",
            paragraph: "APIs enable different applications to communicate with each other, simplifying integration and data exchange."
        },
        {
            heading: "Version Control with Git",
            paragraph: "Git is a version control system that helps developers track changes in their code and collaborate effectively."
        },
        {
            heading: "Introduction to React",
            paragraph: "React is a JavaScript library for building user interfaces, particularly single-page applications."
        },
        {
            heading: "Node.js for Backend Development",
            paragraph: "Node.js allows developers to use JavaScript for server-side programming, enabling full-stack development."
        },
        {
            heading: "Exploring MongoDB",
            paragraph: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it highly scalable."
        }
    ];



    return (
        <>
            <Bar Heading="BLOG" />
            <div className="blog-container mt-[10vh] mb-[10vh]">
                <div className="blogs flex justify-center flex-wrap">
                    <div className="cards-container w-[90%] flex flex-wrap justify-around gap-5">
                    {
                        contentArray.map((res) => (
                            <div className="card w-[30%] rounded-md p-3 flex flex-col gap-3 border-none">
                                <img src={car} alt="mycar" />
                                <h3 className="text-4xl font-semibold">{res.heading}</h3>
                                <p className="text-xl text-gray-500">{res.paragraph}</p>
                            </div>
                        ))
                    }

                    </div>

                    {/* <div className="card w-[25%] rounded-md p-3 flex flex-col gap-3 border-none">
                        <img src={car} alt="mycar" />
                        <h3 className="text-4xl font-semibold">Things to remember while renting car</h3>
                        <p className="text-xl text-gray-500">Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
                    </div>

                    <div className="card w-[25%] rounded-md p-3 flex flex-col gap-3 border-none">
                        <img src={car} alt="mycar" />
                        <h3 className="text-4xl font-semibold">Things to remember while renting car</h3>
                        <p className="text-xl text-gray-500">Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
                    </div> */}
                </div>


            </div>
        </>
    )
}

export default Blog
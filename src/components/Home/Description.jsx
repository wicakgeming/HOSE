import huaweipng from "@/public/images/HuaweiPartners.jpg";
import oldmanbeat from "@/public/images/checkingheartrate.jpg";
import heartbeat from "@/public/images/ching.png";

const Description = () => {
    const articles = [
        {
            title: "Convenient And Reliable",
            category: "Technology",
            description: "HOSE acquired precise and accurate data that can improved your old age with fast and reliable data monitoring",
            image: heartbeat.src, // Access the src property of the imported image
        },
        {
            title: "Adapting Huawei Cloud Technologies",
            category: "Technology",
            description: "With the Huawei Cloud Technologies data processing and data transfer will be fast and accurate",
            image: huaweipng.src, // Access the src property of the imported image
        },
        {
            title: "Checks you vitals anytime anywhere",
            category: "Technology",
            description: "With the HOSE compacted and integrated system you can monitor your vitals data anytime and anywhere",
            image: oldmanbeat.src, // Access the src property of the imported image
        },
    ];

    return (
        <>
            <section className="container mx-auto py-36 px-4">
                <h2 className="text-2xl font-semibold text-center mb-8 text-white ">HOSE Advantages</h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {articles.map((article, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="mt-2 text-lg font-bold text-white">{article.title}</h3>
                                <p className="mt-2 text-gray-400">{article.description}</p>
                                {/* <button className="mt-4 inline-block px-4 py-2 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600">
                                    Read More
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Description;

import Image from "next/image"
import oldpeople from "@/public/images/oldpeople.png"

const Home = () => {
    return(
    <>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-8 mx-auto max-w-4xl text-white">
            <div className=""> 
                <Image src={oldpeople} width={500} height={500} alt="old person using HOSE" className=""/>
            </div>
            <div className="">
                <h1 className="text-6xl py-3">Health Monitoring System for Elderly </h1>
                <h3 className="">"The Health Monitoring System for Elderly is designed to address the challenges of manual health data monitoring in elderly care by integrating real-time data collection and automatic transmission to cloud-based databases. The system uses cutting-edge IoT technology provided by Huawei, which allows seamless and efficient monitoring through a combination of APIs, MQTT, and cloud computing"</h3>
            </div>
        </div>
    </>
    )
}

export default Home
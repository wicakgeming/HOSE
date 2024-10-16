import Image from "next/image"

const Home = () => {
    return(
    <>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center gap-4  mx-auto max-w-4xl text-white">
            <div className=""> 
                <Image src="https://placehold.co/600x400/png" width={350} height={350} alt="..." className=""/>
                KOTAK 1
            </div>
            <div className="">
                <h1 className="text-6xl py-3">Health Monitoring System for Elderly </h1>
                <h3 className="">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h3>
            </div>
        </div>
    </>
    )
}

export default Home
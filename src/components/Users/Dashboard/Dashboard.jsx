import Link from "next/link";
import heartbeat from "@/public/icons/heartbeat.png"
import userpng from "@/public/icons/user.png"

const Dashboard = () => {
    const menuItems = [
        { name: 'Sensors', href: '/users/sensor', icon: heartbeat.src, color: 'bg-primary', hover: 'hover:bg-blue-700' },
        { name: 'My Information', href: '/users/information', icon: userpng.src, color: 'bg-primary', hover: 'hover:bg-blue-700' },
    ];
    
    return ( 
        <div className="min-h-screen text-white p-8">
            <h1 className="text-2xl font-bold mb-8">User Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {menuItems.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.href} 
                        passHref 
                        className={`p-6 rounded-lg shadow-lg ${item.color} flex items-center justify-center flex-col ${item.hover} hover:bg-opacity-80 transition`}
                    >
                        <img src={item.icon} alt={`${item.name} icon`} className="w-10 h-10 mb-2" />
                        <span className="text-lg font-medium">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

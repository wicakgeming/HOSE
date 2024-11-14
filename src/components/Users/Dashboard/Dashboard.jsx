import Link from "next/link";

const Dashboard = () => {
    const menuItems = [
        { name: 'Sensors', href: '/my-course', icon: '📘', color: 'bg-gray-800' },
        { name: 'My Information', href: '/my-information', icon: '👤', color: 'bg-gray-800' },
      ];
    return( 
            <div className="min-h-screen  text-white p-8">
            <h1 className="text-2xl font-bold mb-8">User Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuItems.map((item, index) => (
                <Link key={index} href={item.href} passHref className={`p-6 rounded-lg shadow-lg ${item.color} flex items-center justify-center flex-col hover:bg-opacity-80 transition`}>
                    <span className="text-4xl mb-2">{item.icon}</span>
                    <span className="text-lg font-medium">{item.name}</span>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default Dashboard
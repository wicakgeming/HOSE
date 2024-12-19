import { authUserSession } from "@/libs/auth-libs";

const UserInformation = async() => {
    const user = await authUserSession()    

    return(
            <div className="max-w-7xl  mt-8 p-6 bg-third rounded-lg  text-black">
            <h2 className="text-2xl font-semibold mb-6 ">Personal Information</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4 py-8 ">
            <div>
                <label className="block text-gray-400">Name</label>
                <p className="text-black font-medium">{user.name}</p>
            </div>
    
            <div>
                <label className="block text-gray-400">Email</label>
                <p className="text-black font-medium">{user.email}</p>
            </div>
    
            <div>
                <label className="block text-gray-400">Role</label>
                <p className="text-black font-medium">{user.role}</p>
            </div>
    
            <div>
                <label className="block text-gray-400">Password</label>
                <p className="text-black font-medium">********</p>
            </div>
            </div>
        </div>
    )
}

export default UserInformation
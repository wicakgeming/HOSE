import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"


const UserActionButton = async() => {
    const user = await authUserSession()
    const actionLabel = user? "Sign Out" : "Sign In"
    const actionURL = user? "/api/auth/signout" : "/api/auth/signin"
    return(
        <div className="flex justify-between gap-4 text-white text-xl">
            {
                user ? <Link href="/users/dashboard" className="hover:text-pashaungu">Dashboard</Link> : null
            }
            {
                user ? null : <Link href="/register" className="hover:text-pashaungu">Register now</Link>
            }
            <Link href={actionURL} className="hover:text-pashaungu">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton
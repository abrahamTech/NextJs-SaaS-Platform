import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
    const { getUser } = getKindeServerSession();

    const user = await getUser()
    console.log(user)

    //Makes sure the user is logged
    if(!user || !user.id) {
        redirect("/auth-callback?origin=dashboard");
    }

    const dbUser = await db.user.findFirst({
        where: {
            id: user.id
        }
    })
    
    //Make sure the user is linked to our database
    if(!dbUser) redirect("/auth-callback?origin=dashboard")

    return (
        <div>
            <h1 className="mb-10">Dashboard</h1>
            Hello {user.given_name} {user.family_name}
        </div>
    )
}

export default Page;
import db from "@/app/lib/db";
import { unstable_cache as nextCache } from "next/cache";

async function getUsers() {
    return await db.user.findMany({
        orderBy: {
            created_at: "asc"
        }
    });
}

const getCachedUsers = nextCache(getUsers, ["users"], {
    tags: ["users"]
});

export default async function ShowUsers() {
    const users = await getCachedUsers();
    return (
        <div>
            <ul className="flex flex-col items-center gap-5">
                {users.map((user) => (
                    <li key={user.id} className="flex flex-col  gap-2 w-[300px]">
                        <div className="flex justify-between gap-2">
                            <h1>username : {user.username}</h1>
                            <p>{user.created_at.toString().split("T")[0]}</p>
                        </div>
                        <div>
                            <p>email : {user.email}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
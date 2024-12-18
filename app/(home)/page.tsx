import ShowUsers from "@/components/showUsers";
import { createUser } from "./actions"

export default function Page() {
    const onClick = async () => {
        "use server"
        await createUser();
    }
    return (
        <div className="flex flex-col items-center gap-5">
            <button onClick={onClick} className="border-2 p-5 bg-black text-white">add users</button>
            <ShowUsers />
        </div>
    )
}
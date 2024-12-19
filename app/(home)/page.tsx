import ShowUsers from "@/components/showUsers";
import { createUser } from "./actions"
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Page() {
    const onClick = async () => {
        "use server"
        await createUser();
    }
    return (
        <div className="flex flex-col items-center gap-5 relative h-full">
            <header className="*:text-white w-full h-[457px] flex flex-col items-center bg-black">
                <div className=" flex items-center justify-between w-full p-4 *:font-bold ">
                    <div>
                        <a className="font-bold text-lg">Ru Blog</a>
                    </div>
                    <nav className="*:uppercase flex gap-10 *:text-xs">
                        <Link href="/home">HOME</Link>
                        <Link href="/archives">archives</Link>
                        <Link href="/about">about</Link>
                        <Link href="/tags">tags</Link>
                    </nav>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="font-extrabold text-8xl">Ru Blog</h1>
                    <span>기술 블로그</span>
                </div>
            </header>
            <main className="grid grid-cols-5 gap-4 w-full px-20">
                <aside>
                    <div>
                        Profile
                    </div>
                </aside>
                <article className="col-span-4 p-5 first:border-0 flex flex-col gap-5">
                    <div className="flex flex-col gap-3 border-b-2">
                        <h1 className="text-3xl font-bold">Mysql과 Prisma를 연동해보자!!</h1>
                        <p className="font-semibold text-neutral-500 italic truncate line-clamp-4 h-full whitespace-break-spaces">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto commodi eius explicabo quidem sed ullam magni incidunt deleniti repellendus quisquam officia itaque eligendi fuga, tenetur facilis error, nobis ratione? Quam, similique ullam distinctio eum asperiores suscipit corrupti perferendis ratione dolor ipsam. Beatae dolorem minima, neque tempora rem delectus adipisci dolor! Expedita odit nobis, laudantium at deleniti eius doloribus praesentium numquam tenetur nihil. Voluptatem, illum nemo sunt fugiat ut nam aliquid odit deserunt aut praesentium dolores? Dicta sunt perspiciatis, error delectus ipsam, obcaecati omnis, eveniet non libero ratione eaque sint facere assumenda dolore nemo! Nisi necessitatibus consequuntur ipsum aliquam tempore.
                        </p>
                        <div className="mb-5">
                            <span className="font-semibold text-neutral-600 italic">Posted by Ruraeru on 2024-12-19</span>
                            <ul className="flex items-center gap-3 *:text-xs font-semibold *:border-2 *:rounded-full *:p-1 *:px-2 *:border-neutral-300 *:text-neutral-500
                            ">
                                <li>Mysql</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
            <footer className="w-full flex flex-col items-center justify-center gap-3">
                <ul className="flex justify-center items-center gap-5">
                    <li>
                        <FaInstagram size={40} />
                    </li>
                    <li>
                        <FaGithub size={40} />
                    </li>
                </ul>
                <div>
                    <span>
                        Copyright &copy; Ruraeru 2024
                    </span>
                </div>
            </footer>
            {/* <button onClick={onClick} className="border-2 p-5 bg-black text-white">add users</button>
            <ShowUsers /> */}
        </div >
    )
}
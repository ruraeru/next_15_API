import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function Page() {
    return (
        <div className="grid grid-cols-5 gap-5 h-full">
            <aside className="col-span-1 bg-black flex flex-col items-center h-screen">
                <div className="*:text-white flex flex-col items-center">
                    <div className="flex items-center justify-between w-full p-4 *:font-bold ">
                        <div>
                            <a className="flex items-center gap-3">
                                <div className="w-[60px] h-[60px] relative rounded-full overflow-hidden">
                                    <Image
                                        fill
                                        objectFit="cover"
                                        src={"/images/profile.jpeg"}
                                        alt="s"
                                    />
                                </div>
                                <span className="font-bold text-lg">엔드프론트-DEV</span>
                            </a>
                        </div>
                    </div>

                    {/* <div className="flex flex-col items-center justify-center w-full h-full">
                        <h1 className="font-extrabold text-5xl">Ru Blog</h1>
                        <span>기술 블로그</span>
                    </div> */}
                </div>
                <div className="flex flex-col gap-3">
                    <div className="bg-white p-2 px-5 rounded-full">
                        <ul className="*:flex *:items-center *:gap-2 flex items-center gap-3 *:font-bold">
                            <li>
                                <MdOutlineWbSunny />
                                Light
                            </li>
                            <li>|</li>
                            <li>
                                <FaRegMoon />
                                Dark
                            </li>
                        </ul>
                    </div>
                    <nav className="flex flex-col gap-10 *:text-xs text-white">
                        <h1 className="font-bold text-lg">Menu</h1>
                        <ul>
                            <Link href="/category/home">Development (11)</Link>
                            <li>
                                <Link href="/category/mysql">&rarr; Mysql</Link>
                            </li>
                            <li>
                                <Link href="/category/prisma">&rarr; Prisma</Link>
                            </li>
                        </ul>
                        <Link href="/archives">archives</Link>
                        <Link href="/about">about</Link>
                        <Link href="/tags">tags</Link>
                    </nav>
                </div>
            </aside>
            <main className="col-span-4 flex flex-col items-center gap-5 relative h-screen">
                <header className="w-full bg-black">
                    <input type="text" placeholder="search" />
                </header>
                <article className="col-span-4 p-5 gap-5 grid grid-cols-4 grid-rows-2 overflow-hidden">
                    <div className="flex flex-col gap-3 border-b-2">
                        <div className="w-full h-[300px] relative rounded-t-xl overflow-hidden">
                            <Image
                                fill
                                objectFit="cover"
                                src={"/images/profile.jpeg"}
                                alt="s"
                            />
                        </div>
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
            <footer className="w-full absolute bottom-0 flex flex-col items-center justify-center gap-3">
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
        </div>
    )
}
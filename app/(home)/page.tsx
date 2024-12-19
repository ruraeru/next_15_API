import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaRegMoon, FaSearch } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function Page() {
    return (
        <div className="flex">
            <aside className="col-span-1 bg-black flex flex-col items-center h-screen min-w-[300px]">
                <div className="*:text-white flex flex-col items-center">
                    <div className="flex items-center justify-between w-full p-4 *:font-bold ">
                        <div>
                            <a className="flex items-center gap-3">
                                <div className="w-[60px] h-[60px] relative rounded-full overflow-hidden">
                                    <Image
                                        fill
                                        sizes="10"
                                        className="object-cover"
                                        src={"/images/profile.jpeg"}
                                        alt="s"
                                    />
                                </div>
                                <span className="font-bold text-lg">엔드프론트-DEV</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
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
                    <nav className="flex flex-col gap-10 text-white w-full">
                        <h1 className="font-extrabold">Menu</h1>
                        <div className="flex flex-col">
                            <Link href="/category/home" className="font-extrabold text-base">Development (11)</Link>
                            <ul>
                                <li>
                                    <Link href="/category/mysql" className="text-sm">
                                        &rarr; Mysql
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/category/prisma" className="text-sm">
                                        &rarr; Prisma
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/archives">archives</Link>
                        <Link href="/about">about</Link>
                        <Link href="/tags">tags</Link>
                        <div>
                            <h1 className="font-extrabold">Social Channels</h1>
                            <ul className="*:flex *:items-center *:gap-2">
                                <li>
                                    <FaGithub /> Github
                                </li>
                                <li>
                                    <FaInstagram /> Instagram
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1>로그인</h1>
                        </div>
                    </nav>
                </div>
            </aside>
            <main className="col-span-4 flex flex-col items-center gap-5 relative h-screen">
                {/* 검색 부분 */}
                <header className="w-full bg-black flex
                 items-center justify-center p-5">
                    <div className="flex items-center gap-5">
                        <input className="w-[600px] p-2 bg-slate-600 rounded-lg focus:outline-none" type="text" placeholder="검색" />
                        <FaSearch size={20} color="white" />
                    </div>
                </header>
                <article className="col-span-4 p-5 gap-5 grid grid-cols-4 grid-rows-2 overflow-hidden">
                    <div className="flex flex-col gap-2">
                        <div className="w-full h-[87.5px] relative rounded-xl overflow-hidden">
                            <Image
                                fill
                                sizes="100"
                                className="object-cover"
                                src="/images/profile.jpeg"
                                alt="s"
                            />
                        </div>
                        <h1 className="text-lg font-bold">Mysql과 Prisma를 연동해보자!!</h1>
                        <p className="font-semibold text-neutral-500 italic truncate line-clamp-3 whitespace-break-spaces">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto commodi eius explicabo quidem sed ullam magni incidunt deleniti repellendus quisquam officia itaque eligendi fuga, tenetur facilis error, nobis ratione? Quam,
                        </p>
                        <div className="mb-5 flex flex-col gap-2">
                            <span className="font-semibold text-neutral-600 italic">2024.12.19</span>
                            <ul className="flex items-center gap-3 *:text-xs font-semibold *:border-2 *:rounded-full *:p-1 *:px-2 *:border-neutral-300 *:text-neutral-500
                            ">
                                <li>Mysql</li>
                                <li>Prisma</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </main>
            <footer className="w-full absolute bottom-0 bg-black flex flex-col items-center justify-center gap-3 text-white p-5">
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
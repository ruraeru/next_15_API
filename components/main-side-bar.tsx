import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export default function MainSideBar() {
    return (
        <aside className="col-span-1 bg-black flex flex-col items-center h-screen min-w-[300px]">
            <div className="*:text-white flex flex-col items-center">
                <div className="flex items-center justify-between w-full p-4 *:font-bold ">
                    <div>
                        <Link href="/" className="flex items-center gap-3">
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
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <div className="bg-white p-2 px-5 rounded-full">
                    <ul className="*:flex *:items-center *:gap-2 flex items-center gap-3 *:font-bold *:text-black">
                        <li>
                            <MdOutlineWbSunny />
                            <span>Light</span>
                        </li>
                        <li>|</li>
                        <li>
                            <FaRegMoon />
                            <span>Dark</span>
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
    )
}
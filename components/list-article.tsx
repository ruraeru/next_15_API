import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

export default function Article({
    title,
    id,
    text,
    photo,
    views,
    created_at,
    userId,
    user
}: {
    title: string;
    id: number;
    text: string;
    user: User;
    photo: string | null;
    views: number;
    created_at: Date;
    updated_at: Date;
    userId: number;
}) {
    return (
        <Link href={`/tweets/${id}`} className="relative flex flex-col p-5 rounded-2xl *:text-white bg-neutral-900 gap-2 w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 justify-start">
                    <div className="relative size-10 rounded-full overflow-hidden">
                        {user.avatar !== null ?
                            <Image
                                fill
                                sizes="(max-width-40px) (max-height-40px)"
                                src={user.avatar}
                                alt={user.username}
                                priority
                            />
                            : <FaUser className="size-10" />}
                    </div>
                    <div className="flex flex-col gap-0 justify-center">
                        <h1 className="text-xl font-bold">{user.username}</h1>
                        <span className="text-xs text-stone-400">@{user.username}</span>
                    </div>
                </div>
                <span className="text-xs text-stone-400 whitespace-nowrap">
                    {/* {formatToTimeAgo(created_at.toString())} */}
                </span>
            </div>
            <div className="flex flex-col justify-center gap-2 overflow-hidden">
                <div className="*:truncate w-1/2">
                    <h1 className="text-lg">{title}</h1>
                </div>
                <div className="flex justify-center">
                    {photo !== null && (
                        <div className="relative w-[468px] h-[568px]">
                            <Image
                                className="rounded-md object-contain"
                                fill
                                sizes="(max-width-468px) (max-height-568px)"
                                src={photo}
                                alt={title}
                                priority
                            />
                        </div>
                    )}
                </div>
                <div className="*:truncate w-1/2">
                    <p className="text-sm break-all">
                        <span className="text-sm font-semibold mr-2">{user.username}</span>
                        {text}
                    </p>
                </div>
            </div>
            {/* <InfoBar {..._count} views={views} /> */}
        </Link>
    )
}
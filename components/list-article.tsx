import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import InfoBar from "./article-info-bar";

export default function Article({
    title,
    id,
    text,
    photo,
    views,
    created_at,
    userId,
    user,
    _count
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
    _count: {
        user: number;
        likes: number;
        comments: number;
    }
}) {
    return (
        <Link href={`/articles/${id}`} className="relative flex flex-col p-5 rounded-2xl *:text-white bg-neutral-900 gap-2 max-h-[333px]">
            <div className="flex flex-col gap-2">
                <div className="flex justify-center">
                    {photo !== null && (
                        <div className="relative w-[171px] h-[87.5px]">
                            <Image
                                className="rounded-md object-co"
                                fill
                                sizes="(max-width-468px) (max-height-568px)"
                                src={photo}
                                alt={title}
                                priority
                            />
                        </div>
                    )}
                </div>
                <div className="flex flex-col *:truncate *:whitespace-break-spaces">
                    <h1 className="text-lg line-clamp-2">
                        {title}
                    </h1>
                    <p className="text-sm line-clamp-3 opacity-50">
                        {text}
                    </p>
                </div>
                <InfoBar {..._count} views={views} />
            </div>
        </Link>
    )
}
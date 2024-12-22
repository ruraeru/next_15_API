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
        <Link href={`/articles/${id}`} className="relative flex flex-col *:text-white bg-neutral-900 gap-2 w-full">
            <div className="flex justify-center">
                {photo !== null && (
                    <div className="relative w-[320px] h-[167px]">
                        <Image
                            className="object-cover"
                            fill
                            sizes="(max-width-468px) (max-height-568px)"
                            src={photo}
                            alt={title}
                            priority
                        />
                    </div>
                )}
            </div>
            <div className="flex flex-col *:truncate *:whitespace-break-spaces p-[1rem]">
                <h4 className="text-lg line-clamp-2">
                    {title}
                </h4>
                <div className="mb-3">
                    <p className="text-sm line-clamp-3 opacity-50">
                        {text}
                    </p>
                </div>
                <div>
                    <p className="text-sm line-clamp-3 opacity-50">5일전 - 0개의 댓글</p>
                </div>
            </div>
            {/* <InfoBar {..._count} views={views} /> */}
        </Link>
    )
}
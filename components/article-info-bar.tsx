import { AiFillLike } from "react-icons/ai";
import { BsBarChartFill } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";

interface InfoBarProps {
    likes: number;
    comments: number;
    views: number;
}

export default function InfoBar({ likes, comments, views }: InfoBarProps) {
    return (
        <div>
            <ul className="flex items-center gap-2 *:flex *:items-center *:gap-2 text-md text-stone-400 w-full">
                <li>
                    <AiFillLike className="size-4" />
                    {likes}
                </li>
                <li>
                    <IoChatbox className="size-4" />
                    {comments}
                </li>
                <li>
                    <BsBarChartFill className="size-4" />
                    {views}
                </li>
            </ul>
        </div>
    )
}
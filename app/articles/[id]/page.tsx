import Comments from "@/components/comments";
import db from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getArticleDetail(id: number) {
    const article = await db.post.findUnique({
        where: {
            id
        },
    });
    return article;
}

export default async function DetailArticle({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const paramsId = Number(id);
    if (isNaN(paramsId)) {
        return notFound();
    }
    const article = await getArticleDetail(Number(id));
    if (!article) {
        return notFound();
    }
    return (
        <div className="relative w-screen">
            {article.photo && (
                <div className="w-full h-[500px] relative">
                    <Image
                        fill
                        className="object-cover"
                        src={article.photo}
                        alt="s"
                    />
                </div>
            )}
            <div className="absolute top-1/3 p-3">
                <h1 className="text-white text-5xl font-semibold bg-black p-3">{article?.title}</h1>
            </div>
            <main className="p-5 text-white">
                <div className="bg-black p-5">
                    <p>{article?.text}</p>
                </div>
            </main>
            <Comments />
        </div>
    )
}
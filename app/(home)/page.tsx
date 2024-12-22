import ArticleList from "@/components/article-list";
import db from "@/lib/db";
import { getArticleTotalCount } from "@/service/articleService";
import { Prisma } from "@prisma/client";
import Image from "next/image";

async function getInitialAriticle() {
    const article = await db.post.findMany({
        take: 8,
        orderBy: {
            created_at: "desc"
        },
        include: {
            user: true,
            _count: true,
        }
    })
    return article;
}

export type InitialArticle = Prisma.PromiseReturnType<typeof getInitialAriticle>;

export default async function Page() {
    const initialArticle = await getInitialAriticle();
    const totalPosts = await getArticleTotalCount();
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="flex flex-col p-20 items-center gap-3">
                    <div className="w-[140px] h-[140px] relative rounded-full overflow-hidden">
                        <Image
                            fill
                            sizes="10"
                            className="object-cover"
                            src={"/images/profile.jpeg"}
                            alt="s"
                        />
                    </div>
                    <span className="font-bold text-3xl">엔드프론트-DEV</span>
                </div>
                <div>
                    총 포스트 수 : {totalPosts} | 000사람입니다.
                </div>
            </div>
            <ArticleList initialArticle={initialArticle} />
        </div>
    )
}
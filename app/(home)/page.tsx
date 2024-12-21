import ArticleList from "@/components/article-list";
import db from "@/lib/db";
import { Prisma } from "@prisma/client";

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
    return (
        <ArticleList initialArticle={initialArticle} />
    )
}
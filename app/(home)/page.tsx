import ArticleList from "@/components/article-list";
import Footer from "@/components/footer";
import MainSideBar from "@/components/main-side-bar";
import SearchBar from "@/components/search-bar";
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
        <div className="flex">
            <MainSideBar />
            <main className="col-span-4 flex flex-col items-center gap-5 relative h-screen">
                {/* 검색 부분 */}
                <SearchBar />
                <ArticleList initialArticle={initialArticle} />
            </main>
            <Footer />
        </div>
    )
}
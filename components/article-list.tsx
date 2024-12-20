"use client"

import { InitialArticle } from "@/app/(home)/page";
import { getPaginatedArticle } from "@/service/articleService";
import { useEffect, useState } from "react";
import Article from "./list-article";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ArticleList({ initialArticle }: { initialArticle: InitialArticle }) {
    const [articles, setArticles] = useState(initialArticle);
    const [page, setPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);

    useEffect(() => {
        const fetchMoreArticle = async () => {
            const { articles, isLastPage } = await getPaginatedArticle(page);
            setIsLastPage(isLastPage);
            setArticles(articles)
        };
        fetchMoreArticle();
    }, [page]);

    return (
        <article className="col-span-4 p-5 gap-5 grid grid-cols-4 grid-rows-2 overflow-hidden">
            <div>
                {articles.map((article) => (
                    <Article key={article.id} {...article} />
                ))}
            </div>
            <div className="w-full mb-20 h-10 p-5 flex mx-auto gap-10 items-center justify-center">
                <button
                    className="disabled:text-black cursor-pointer"
                    onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
                    disabled={page === 1}>
                    <FaArrowLeft width={20} height={20} />
                </button>
                <span>{page}</span>
                <button
                    className="disabled:text-black cursor-pointer"
                    onClick={() => setPage((prev) => (isLastPage ? prev : prev + 1))}
                    disabled={isLastPage}>
                    <FaArrowRight width={20} height={20} />
                </button>
            </div>

            {/* <div className="flex flex-col gap-2">
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
                    <span className="font-semibold text-sm text-neutral-600 italic">2024.12.19</span>
                    <ul className="flex items-center justify-start gap-3 *:text-xs font-semibold *:border-2 *:rounded-full *:p-1 *:px-2 *:border-neutral-300 *:text-neutral-500
                ">
                        <li>Mysql</li>
                        <li>Prisma</li>
                    </ul>
                </div>
            </div> */}
        </article>
    )
}
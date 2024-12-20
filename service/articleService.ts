"use server";

import db from "@/lib/db";
const LIMIT_NUMBER = 8;

export async function getArticleByPage(page: number) {
  const articles = await db.post.findMany({
    include: {
      user: true,
      _count: true,
    },
    skip: LIMIT_NUMBER * (page - 1),
    take: LIMIT_NUMBER,
    orderBy: {
      created_at: "desc",
    },
  });
  console.log("qweqwe", articles);
  return articles;
}

export async function getArticleTotalCount() {
  return db.post.count();
}

export async function getPaginatedArticle(page: number) {
  const articles = await getArticleByPage(page);
  const ARTICLE_TOTAL_COUNT = await getArticleTotalCount();
  const isLastPage = ARTICLE_TOTAL_COUNT <= LIMIT_NUMBER * page;

  return { articles, isLastPage };
}

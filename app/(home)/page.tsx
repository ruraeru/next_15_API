import Image from "next/image";
import Link from "next/link";
import path from "path"; // 파일 경로 조작을 위한 Node.js 내장 모듈
import matter from "gray-matter"; // Markdown 파일의 front matter(metadata)를 추출하는 라이브러리
import fs from "fs"; // 파일 시스템 모듈

export default async function Page() {
    // 포스트 데이터를 정렬하여 가져오는 함수를 정의합니다.
    function getSortedPostsData() {
        const postsDirectory = path.join(process.cwd(), "/aticles"); // Markdown 파일들이 있는 디렉토리 경로
        const fileNames = fs.readdirSync(postsDirectory); // 해당 디렉토리 내 파일 목록을 동기적으로 읽어옵니다.
        const allPostsData = fileNames.map((fileName) => {
            const id = fileName.replace(/\.mdx$/, ""); // 파일 이름에서 확장자를 제거하여 id로 사용합니다.

            // Markdown 파일을 읽어옵니다.
            const fullPath = path.join(postsDirectory, fileName); // 전체 파일 경로
            const fileContents = fs.readFileSync(fullPath, "utf8"); // 파일 내용을 UTF-8 형식으로 읽어옵니다.
            const matterResult = matter(fileContents); // gray-matter 라이브러리를 사용하여 front matter를 추출합니다.

            return {
                id,
                img: matterResult.data.img,
                ...matterResult.data, // front matter 데이터를 반환합니다.
            };
        });

        // 날짜를 기준으로 포스트 데이터를 정렬합니다.
        return allPostsData.sort((a, b) => {
            if (a.date < b.date) {
                return 1; // a의 날짜가 더 작으면 b 앞으로 정렬합니다.
            } else {
                return -1; // b의 날짜가 더 작으면 a 앞으로 정렬합니다.
            }
        });
    }

    // 정렬된 포스트 데이터를 가져옵니다.
    const postDatas = getSortedPostsData();

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
                    {/* 총 포스트 수 : {totalPosts} | 000사람입니다. */}
                </div>
            </div>
            <section className="commu_board w-[600px] border border-black mx-auto mt-10 p-4">
                <div>
                    <ul className="flex gap-5 items-center justify-center">
                        {postDatas.map((data, index) => (
                            <li key={data.id} className="max-w-[320px]">
                                <Link href={`/articles/${data.id}`}>
                                    <div className="flex justify-center">
                                        <div className="relative w-[320px] h-[167px]">
                                            <Image
                                                className="object-cover"
                                                fill
                                                sizes="(max-width-468px) (max-height-568px)"
                                                src={data.img}
                                                alt={data.title}
                                                priority
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col *:truncate *:whitespace-break-spaces p-[1rem]">
                                        <h4 className="text-lg line-clamp-2">
                                            {data.title}
                                        </h4>
                                        <div className="mb-3">
                                            <p className="text-sm line-clamp-3 opacity-50">
                                                {data.content}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm line-clamp-3 opacity-50">
                                                {data.date} - 0개의 댓글</p>
                                        </div>
                                        <ul>
                                            <li className="bg-gray-400 w-fit text-sm px-2 rounded-full ">{data.category}</li>
                                        </ul>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}
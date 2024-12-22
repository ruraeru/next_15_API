import Image from "next/image";
import Link from "next/link";
import path from "path"; // 파일 경로 조작을 위한 Node.js 내장 모듈
import matter from "gray-matter"; // Markdown 파일의 front matter(metadata)를 추출하는 라이브러리
import fs from "fs"; // 파일 시스템 모듈

export default function Test() {

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
        <section className="commu_board w-[600px] border border-black mx-auto mt-10 p-4">
            <div>
                <ul>
                    {postDatas.map((data, index) => (
                        <li key={data.id} className="flex items-center border-b border-[#dbdbdb]">
                            <div className="w-[110px]">{index + 1}</div>
                            <div className="w-[110px]">{data.date}</div>
                            <div className="w-[110px]">{data.category}</div>
                            <Link
                                href={`/test/${data.id}`}
                                className="flex-1 text-left py-8 leading-10 font-semibold text-[32px] overflow-hidden text-ellipsis whitespace-nowrap"
                            >
                                {data.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
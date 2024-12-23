import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import fs from "fs";
import Image from "next/image";
interface IPostData {
    id: string;
    content: string;
    title: string;
    date: string;
    category: string;
}
export default async function Mdx({ params }: { params: Promise<{ title: string }> }) {
    const { title } = await params;
    function getSortedPostsData(): IPostData[] {
        const postsDirectory = path.join(process.cwd(), "/aticles");
        const fileNames = fs.readdirSync(postsDirectory).filter((fileName) => fileName === `${title}.mdx`);

        const allPostsData = fileNames.map((fileName) => {
            const id = fileName.replace(/\.mdx$/, "");

            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const matterResult = matter(fileContents);
            return {
                id,
                content: matterResult.content,
                title: matterResult.data.title,
                date: matterResult.data.date,
                category: matterResult.data.catagory,
                ...matterResult.data
            };
        });
        return allPostsData;
    }


    const postDatas = getSortedPostsData();
    console.log(postDatas[0].img)
    return (
        <section className="commu_board w-[600px] mx-auto mt-10 p-4">
            <div>
                <ul>
                    {postDatas.map((data, index) => (
                        <li key={data.id}>
                            <div className="flex items-center border-b border-[#dbdbdb]">
                                <div className="w-[110px]">{index + 1}</div>
                                <Link
                                    href={`/test/${data.id}`}
                                    className="flex-1 text-left py-8 leading-10 font-semibold text-[32px] overflow-hidden text-ellipsis whitespace-nowrap"
                                >
                                    {data.title}
                                </Link>
                                <div className="w-[110px]">{data.date}</div>
                                <div className="w-[110px]">{data.category}</div>
                            </div>
                            <Image src={data.img} alt="asd" width={400} height={400} />
                            <div className="m-4 text-center">{data.content}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
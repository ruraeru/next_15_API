"use client"

export default function Comments() {
    return (
        <section
            style={{ width: '100%' }}
            ref={(element) => {
                if (!element) return

                const script = document.createElement('script')
                script.src = "https://utteranc.es/client.js";
                script.async = true;
                script.setAttribute("repo", "ruraeru/next_blog"); //자신의 repo
                script.setAttribute("issue-term", "title"); // tilte로 설정합시다
                script.setAttribute("theme", "github-dark"); // 테마
                script.setAttribute("label", `blog-comments`);
                element.replaceChildren(script)
            }}
        />
    )
}
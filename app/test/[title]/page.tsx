export default async function Post({ params }: { params: Promise<{ title: string }> }) {
    const { title } = await params;
    return (
        <div>
            {title}
        </div>
    )

}
export default async function DetailArticle({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <div>
            {id}
        </div>
    )
}
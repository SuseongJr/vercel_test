export default async function Read(props) {
    const params = await props.params; // ✅ Promise 풀기
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL + `topics/${params.id}`);
    const topic = await resp.json();
    return (
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    )
}
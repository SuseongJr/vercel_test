"use client"
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
    const params = useParams();
    const router = useRouter();
    const id = params.id;
    return (
        <ul>
            <li><Link href="/create">Create</Link></li>
            {/* id가 있다면 update, delete 보이게 */}
            {id ? <>
                <li><Link href={"/update/" + id}>Update</Link></li>
                <li><input type="button" value="delete" onClick={()=>{
                    const options = {method: 'DELETE'}
                    fetch(process.env.NEXT_PUBLIC_API_URL + 'topics/' + id, options)
                    .then(resp=>resp.json())
                    .then(result=>{
                        router.push('/');
                        router.refresh();
                    });
                }}></input></li>
            </> : null}
        </ul>
    )
}

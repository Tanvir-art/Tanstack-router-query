import { queryOptions } from "@tanstack/react-query";

export type post = {
    id: number,
    title: string,
    body: string
}
export async function getposts() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data : post[] = await posts.json();
    await new Promise((r)=>setTimeout(r, 3000))
    return data;
}

export function postQueryOption(){
    return queryOptions({
        queryKey: ['posts'],
        queryFn: getposts
    })
}
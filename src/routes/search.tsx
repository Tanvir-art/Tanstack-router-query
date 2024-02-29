import { createFileRoute } from "@tanstack/react-router"

type SearchParams = {
    query: string
    limit: number
}

export const Route = createFileRoute("/search")({
    component: search,
    validateSearch: (search: Record<string, unknown>): SearchParams =>{
        return {
            query: search.query as string,
            limit: Number(search.limit || 10)
        }
    }
})
export default function search(){
    const {limit, query} = Route.useSearch();
    return (
        <div>
            <h2>search</h2>
            <p>Query : {query}</p>
            <p>Limit : {limit}</p>
        </div>
    )
}
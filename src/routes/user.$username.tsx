import { createFileRoute } from "@tanstack/react-router"

 export const Route = createFileRoute("/user/$username")({
    component: User,
 })
export default function User() {
    const {username} = Route.useParams();
  return (
    <div>
      <h2>user - {username}</h2>
    </div>
  )
}

 

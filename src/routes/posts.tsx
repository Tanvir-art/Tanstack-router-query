 import { createFileRoute } from "@tanstack/react-router";
import { postQueryOption } from "../fetchPosts";

 export const Route = createFileRoute("/posts")({
    component: posts, 
    loader:({context : {queryClient}})=>  queryClient.ensureQueryData(postQueryOption()),
    pendingComponent: ()=> <div>Loading...</div>
 })

 function posts(){
   const posts = Route.useLoaderData()
    return <div>
      <h2>
      posts
         </h2>
         <p>{posts.map(post=>(
            <div key={post.id}>
               <h2>{post.title}</h2>
               <h2>{post.body}</h2>
            </div>
         ))}</p>
      </div> 
}
 
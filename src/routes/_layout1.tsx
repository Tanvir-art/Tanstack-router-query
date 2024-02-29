import { Outlet, createFileRoute } from "@tanstack/react-router";
 
 
export const Route = createFileRoute("/_layout1")({
    component: Layout,
})

export default function Layout () {
  return (
    <div>
        <h2>layout</h2>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

 

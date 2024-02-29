import { createFileRoute } from '@tanstack/react-router'
 

export const Route = createFileRoute("/_layout1/user")({
    component: User,
})

export default function User () {
  return ( 
    <div>
      <h2>user route here</h2>
    </div>
  )
}

 

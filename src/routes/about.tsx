import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: about,
})

function about() {
    return (
      <div className="p-2">
        <h3>Welcome about!</h3>
      </div>
    )
  }

export default about


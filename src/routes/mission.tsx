import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/mission')({
  component: () => <div className='border text-5xl text-center w-full h-1/2 my-10 bg-green-400'>Coming Soon!</div>
})
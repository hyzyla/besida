import { useState } from 'react'

import CommentForm from '@/components/Comments/CommentForm'

export default function CommentTop() {
  const [active, setActive] = useState<boolean>(false)

  if (active) {
    return <CommentForm onCancel={() => setActive(false)} />
  }

  return (
    <div
      className="border-[1px] p-2 w-full rounded-md bg-gray-50 text-gray-400 hover:cursor-pointer"
      onClick={() => setActive(true)}
    >
      Залиште коментар
    </div>
  )
}

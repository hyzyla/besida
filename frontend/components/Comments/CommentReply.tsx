import React, { useState } from 'react'

import CommentForm from '@/components/Comments/CommentForm'
import CommentLike from '@/components/Comments/CommentLike'

export default function CommentReply() {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row justify-between">
        <button
          className="text-gray-500 text-[14px]"
          onClick={() => setActive(!active)}
        >
          Відповісти
        </button>
        <CommentLike likes={2} />
      </div>
      {active && <CommentForm onCancel={() => setActive(false)} />}
    </div>
  )
}

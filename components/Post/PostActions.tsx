import React from 'react'
import { FaRegCommentDots, FaRegHeart } from 'react-icons/fa'

type Props = {
  likes: number
  comments: number
}

export default function PostActions(props: Props) {
  return (
    <div className="flex justify-end">
      <div className="flex flex-row space-x-6">
        <div className="flex items-center justify-end flex-row space-x-2">
          <FaRegHeart />
          <div>{props.likes}</div>
        </div>
        <div className="flex items-center justify-end flex-row space-x-2">
          <FaRegCommentDots />
          <div>{props.comments}</div>
        </div>
      </div>
    </div>
  )
}

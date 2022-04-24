import React from 'react'
import { FaRegHeart } from 'react-icons/fa'

type Props = {
  likes: number
}

export default function CommentLike(props: Props) {
  return (
    <div className="flex items-center justify-end flex-row space-x-2">
      <FaRegHeart />
      <div>{props.likes}</div>
    </div>
  )
}

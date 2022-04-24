import React from 'react'

import PostActions from '@/components/Post/PostActions'
import PostAuthor from '@/components/Post/PostAuthor'

type Props = {
  likes: number
  comments: number
}

export default function PostFooter(props: Props) {
  return (
    <div className="flex flex-row justify-between">
      <PostAuthor />
      <PostActions comments={props.comments} likes={props.likes} />
    </div>
  )
}

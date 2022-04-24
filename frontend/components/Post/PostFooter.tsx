import React from 'react'

import PostActions from '@/components/Post/PostActions'
import PostAuthor from '@/components/Post/PostAuthor'
import * as t from '@/types/types'

type Props = {
  likes: number
  comments: number
  author: t.Author
  date: string
}

export default function PostFooter(props: Props) {
  return (
    <div className="flex flex-row justify-between">
      <PostAuthor author={props.author} date={props.date} />
      <PostActions comments={props.comments} likes={props.likes} />
    </div>
  )
}

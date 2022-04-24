import React from 'react'

import PostContainer from '@/components/Post/PostContainer'
import PostContent from '@/components/Post/PostContent'
import PostFooter from '@/components/Post/PostFooter'
import PostTitle from '@/components/Post/PostTitle'
import * as t from '@/types/types'

type Props = {
  id: number
  title: string
  content: string
  likes: number
  comments: number
  author: t.Author
  date: string
}

export default function Post(props: Props) {
  return (
    <PostContainer>
      <div className="space-y-4">
        <PostTitle title={props.title} />
        <PostContent content={props.content} />
      </div>
      <PostFooter
        comments={props.comments}
        likes={props.likes}
        author={props.author}
        date={props.date}
      />
    </PostContainer>
  )
}

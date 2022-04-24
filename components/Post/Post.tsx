import React from 'react'

import PostContainer from '@/components/Post/PostContainer'
import PostContent from '@/components/Post/PostContent'
import PostFooter from '@/components/Post/PostFooter'
import PostTitle from '@/components/Post/PostTitle'

type Props = {
  id: number
  header: string
  content: string
  likes: number
  comments: number
}

export default function Post(props: Props) {
  return (
    <PostContainer>
      <div className="space-y-4">
        <PostTitle title={props.header} />
        <PostContent content={props.content} />
      </div>
      <PostFooter comments={props.comments} likes={props.likes} />
    </PostContainer>
  )
}

import Link from 'next/link'
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

export default function PostPreview(props: Props) {
  return (
    <PostContainer>
      <Link
        href={{
          pathname: '/posts/[slug]',
          query: { slug: props.id },
        }}
      >
        <a className="space-y-4">
          <PostTitle title={props.header} />
          <PostContent content={props.content} />
        </a>
      </Link>
      <PostFooter comments={props.comments} likes={props.likes} />
    </PostContainer>
  )
}

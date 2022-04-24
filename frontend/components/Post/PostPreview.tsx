import Link from 'next/link'
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
  date: string
  author: t.Author
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
          <PostTitle title={props.title} />
          <PostContent content={props.content} />
        </a>
      </Link>
      <PostFooter
        comments={props.comments}
        likes={props.likes}
        author={props.author}
        date={props.date}
      />
    </PostContainer>
  )
}

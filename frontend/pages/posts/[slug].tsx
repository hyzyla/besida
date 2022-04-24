import '../../types/types'

import { GetServerSideProps } from 'next'
import React from 'react'

import Comments from '@/components/Comments/Comments'
import Layout from '@/components/Layout/Layout'
import Post from '@/components/Post/Post'
import * as t from '@/types/types'

type Props = {
  post: t.Post
}

export default function PostPage(props: Props) {
  const post = props.post
  return (
    <Layout>
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        content={post.content}
        likes={post.likesCount}
        comments={post.commentsCount}
        date={post.date}
        author={post.author}
      />
      <Comments />
    </Layout>
  )
}

type ServerSideProps = { props: Props }

export const getServerSideProps: GetServerSideProps = async (
  context
): Promise<ServerSideProps> => {
  const postID = context.params.slug
  const response = await fetch(`http://localhost:8010/api/posts/${postID}`)
  const post = await response.json()
  return { props: { post } }
}

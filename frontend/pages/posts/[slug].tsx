import { useRouter } from 'next/router'
import React from 'react'

import Comments from '@/components/Comments/Comments'
import { posts } from '@/components/constants'
import Layout from '@/components/Layout/Layout'
import Post from '@/components/Post/Post'

export default function PostPage() {
  const router = useRouter()
  const { slug } = router.query
  const post = posts.find((post) => post.id === Number(slug))
  if (!post) {
    return <h2>Упс, помилочка</h2>
  }

  return (
    <Layout>
      <Post
        key={post.id}
        id={post.id}
        header={post.header}
        content={post.content}
        likes={post.likes}
        comments={post.comments}
      />
      <Comments />
    </Layout>
  )
}

import { posts } from '@/components/constants'
import PostPreview from '@/components/Post/PostPreview'

export default function Feed() {
  return (
    <>
      {posts.map((post) => (
        <PostPreview
          key={post.id}
          id={post.id}
          header={post.header}
          content={post.content}
          likes={post.likes}
          comments={post.comments}
        />
      ))}
    </>
  )
}

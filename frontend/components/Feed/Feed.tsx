import PostPreview from '@/components/Post/PostPreview'
import { FeedPost } from '@/types/models/FeedPost'

type Props = {
  posts: FeedPost[]
}

export default function Feed(props: Props) {
  return (
    <>
      {props.posts.map((post) => (
        <PostPreview
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          likes={post.likesCount}
          comments={post.commentsCount}
          date={post.date}
          author={post.author}
        />
      ))}
    </>
  )
}

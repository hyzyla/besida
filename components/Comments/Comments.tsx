import Card from '@/components/Card/Card'
import Comment from '@/components/Comments/Comment'
import CommentTop from '@/components/Comments/CommentTop'

export default function Comments() {
  return (
    <Card>
      <div className="flex flex-col space-y-10">
        <CommentTop />
        <div className="space-y-4">
          <Comment>
            <Comment>
              <Comment />
              <Comment />
            </Comment>
            <Comment />
          </Comment>
          <Comment />
          <Comment>
            <Comment />
          </Comment>
        </div>
      </div>
    </Card>
  )
}

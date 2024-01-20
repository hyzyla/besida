import { GetServerSideProps } from 'next'

import Feed from '@/components/Feed/Feed'
import Layout from '@/components/Layout/Layout'

import { AppClient, FeedPost, User } from '../client'
import { UserContext } from '../storage/context'

type Props = {
  posts: FeedPost[]
  user: User | null
}

export default function IndexPage(props: Props) {
  return (
    <UserContext.Provider value={props.user}>
      <Layout>
        <Feed posts={props.posts} />
      </Layout>
    </UserContext.Provider>
  )
}

type ServerSideProps = { props: Props }

export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<ServerSideProps> => {
  const client = new AppClient({
    BASE: 'http://localhost:8010',
    HEADERS: { Cookie: req.headers.cookie },
  })
  let user: User | null = null
  try {
    user = await client.users.getMeApiUsersMeGet()
  } catch (e) {}

  const posts = await client.posts.getPostsApiPostsGet()
  return { props: { posts, user } }
}

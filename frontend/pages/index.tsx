import { GetServerSideProps } from 'next'

import Feed from '@/components/Feed/Feed'
import Layout from '@/components/Layout/Layout'
import * as t from '@/types/types'

type Props = {
  posts: t.Posts
}

export default function IndexPage(props: Props) {
  return (
    <Layout>
      <Feed posts={props.posts} />
    </Layout>
  )
}

type ServerSideProps = { props: Props }

export const getServerSideProps: GetServerSideProps =
  async (): Promise<ServerSideProps> => {
    const response = await fetch(`http://localhost:8010/api/posts`)
    const posts = await response.json()
    return { props: { posts } }
  }

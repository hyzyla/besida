import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { FormEvent } from 'react'

import Button from '@/components/Button/Button'
import Card from '@/components/Card/Card'
import Layout from '@/components/Layout/Layout'
import TextArea from '@/components/TextArea/TextArea'

import { AppClient, User } from '../client'
import { UserContext } from '../storage/context'

type Props = {
  user: User | null
}

export default function SubmitPage(props: Props) {
  const router = useRouter()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      title: event.currentTarget.postTitle.value,
      content: event.currentTarget.postContent.value,
    }
    console.log(data)

    const client = new AppClient({
      // BASE: 'http://localhost:8010',
    })
    const post = await client.posts.createPostApiPostsPost(data)
    await router.push(`/posts/${post.id}`)
  }
  return (
    <UserContext.Provider value={props.user}>
      <Layout>
        <Card>
          <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">Нова публікація</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <input
                className="p-2 rounded-md border-[1px] focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                name="postTitle"
              ></input>
              <TextArea name="postContent" rows={10} />
              <div className="flex justify-end">
                <Button type="submit">Опублікувати</Button>
              </div>
            </form>
          </div>
        </Card>
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

  return { props: { user } }
}

import Link from 'next/link'

import ButtonLink from '@/components/ButtonLink/ButtonLink'

import { User } from '../../client'

type Props = {
  user: User
}

export default function ActionsUser(props: Props) {
  const user = props.user
  return (
    <div className="flex flex-row items-center space-x-4">
      <Link href="/submit" passHref>
        <ButtonLink>Створити</ButtonLink>
      </Link>
      <div>{user.name}</div>
    </div>
  )
}

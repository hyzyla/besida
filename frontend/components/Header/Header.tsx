import { useContext } from 'react'

import ActionsAnon from '@/components/Header/ActionsAnon'
import ActionsUser from '@/components/Header/ActionsUser'
import Logo from '@/components/Header/Logo'

import { UserContext } from '../../storage/context'

export default function Header() {
  const user = useContext(UserContext)
  return (
    <header className="bg-white w-screen w-full h-16 flex items-center justify-center">
      <div className="flex items-center w-full justify-between px-5 sm:px-16">
        <Logo />
        {user ? <ActionsUser user={user} /> : <ActionsAnon />}
      </div>
    </header>
  )
}

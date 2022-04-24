import Link from 'next/link'

import Logo from '@/components/Header/Logo'

export default function Header() {
  return (
    <header className="bg-white w-screen w-full h-16 flex items-center justify-center">
      <div className="flex items-center w-full justify-between px-5 sm:px-16">
        <Logo />
        <Link href="/login">
          <a>Увійти</a>
        </Link>
      </div>
    </header>
  )
}

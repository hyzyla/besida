import Link from 'next/link'

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/">
        <a className="text-3xl font-bold space-x-5">
          <span>👋</span>
          <span>Бéсіда</span>
        </a>
      </Link>
    </div>
  )
}

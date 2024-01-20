import React from 'react'

type Props = {
  children: React.ReactChild
  onClick?: () => void
  href?: string
}

const ButtonLink = React.forwardRef<never, Props>(
  ({ onClick, href, children }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className="inline-flex items-center py-2 px-3.5 text-sm font-medium leading-4 text-white bg-gray-600 hover:bg-gray-700 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
      >
        {children}
      </a>
    )
  }
)
ButtonLink.displayName = 'ButtonLink'

export default ButtonLink

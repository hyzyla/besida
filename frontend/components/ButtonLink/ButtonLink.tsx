import React from 'react'

type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button(props: Props) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className="inline-flex items-center py-2 px-3.5 text-sm font-medium leading-4 text-white bg-gray-600 hover:bg-gray-700 rounded-full border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm"
    >
      {props.children}
    </button>
  )
}

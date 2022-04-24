import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Card(props: Props) {
  return (
    <div className="bg-white p-5 mx-5 space-y-4 overflow-hidden rounded-lg">
      {props.children}
    </div>
  )
}

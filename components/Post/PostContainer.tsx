import React from 'react'

import Card from '@/components/Card/Card'

type Props = {
  children: React.ReactNode
}

export default function PostContainer(props: Props) {
  return (
    <Card>
      <div className="flex flex-col space-y-6">{props.children}</div>
    </Card>
  )
}

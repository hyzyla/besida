import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

import * as t from '@/types/types'

interface Props {
  author: t.Author
  date: string
}

export default function PostAuthor(props: Props) {
  return (
    <div className="flex flex-row space-x-6 items-center">
      <div className="flex flex-row space-x-2 items-center">
        <FaUserCircle className="flex justify-center items-center" />
        <div className="font-[500] text-[16px]">{props.author.name}</div>
      </div>
      <div className="text-[14px] text-gray-600">{props.date}</div>
    </div>
  )
}

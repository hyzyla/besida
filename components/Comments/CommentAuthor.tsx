import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

export default function CommentAuthor() {
  return (
    <div className="flex flex-row space-x-6 items-center">
      <div className="flex flex-row space-x-2 items-center">
        <FaUserCircle className="flex justify-center items-center" />
        <div className="font-[500] text-[16px]">Андрій Маркухів</div>
      </div>
      <div className="text-[14px] text-gray-600">12 червня</div>
    </div>
  )
}

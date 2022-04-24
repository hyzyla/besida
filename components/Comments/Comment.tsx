import React from 'react'

import CommentAuthor from '@/components/Comments/CommentAuthor'
import CommentReply from '@/components/Comments/CommentReply'

interface Props {
  children?: React.ReactNode
}

export default function Comment(props: Props) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col space-y-2">
        <div className="flex flex-row justify-between">
          <CommentAuthor />
        </div>
        <div>
          Я взагалі люблю доу. Але клікбейт, ну блін.. В самому інтерв’ю було
          повно інших питань. Чого не можна просто написати «рубрика коротке
          інтерв’ю. Віталій Седлер, СЕО інтеліас» Нащо виривати якусь фразу з
          контексту і робити клікбейтний заголовок??
        </div>
        <CommentReply />
      </div>
      {props.children && (
        <div className="pl-10 space-y-5 border-l-[1px]">{props.children}</div>
      )}
    </div>
  )
}

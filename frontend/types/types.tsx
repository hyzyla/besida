export type Post = {
  id: number
  title: string
  content: string
  likesCount: number
  commentsCount: number
  date: string
  author: Author
}

export type Posts = Post[]

export type Author = {
  id: number
  name: string
}

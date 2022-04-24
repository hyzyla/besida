type Props = {
  title: string
}

export default function PostTitle(props: Props) {
  return <h2 className="font-[500] text-xl">{props.title}</h2>
}

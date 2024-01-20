type Props = {
  rows?: number
  name?: string
}

export default function TextArea(props: Props) {
  return (
    <div>
      <textarea
        name={props.name}
        rows={props.rows || 4}
        className="p-2 w-full rounded-md border-[1px]"
      />
    </div>
  )
}

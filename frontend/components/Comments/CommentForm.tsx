import Button from '@/components/Button/Button'
import TextArea from '@/components/TextArea/TextArea'

type Props = {
  onCancel: () => void
}

export default function CommentForm(props: Props) {
  return (
    <div className="flex flex-col items-end space-y-2">
      <TextArea />
      <div className="flex flex-row space-x-3">
        <Button onClick={props.onCancel}>Скасувати</Button>
        <Button>Опублікувати</Button>
      </div>
    </div>
  )
}

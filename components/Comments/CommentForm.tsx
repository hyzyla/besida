type Props = {
  onCancel: () => void
}

export default function CommentForm(props: Props) {
  return (
    <div className="flex flex-col items-end space-y-2">
      <textarea rows={4} className="border-[1px] p-2 w-full rounded-md" />
      <div className="flex flex-row space-x-3">
        <button
          type="button"
          onClick={props.onCancel}
          className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Скасувати
        </button>
        <button
          type="button"
          className="inline-flex items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Опублікувати
        </button>
      </div>
    </div>
  )
}

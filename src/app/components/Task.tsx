export default function TaskItem(props: any) {
  let dueId = "due-" + props.id
  const dueDate = document.getElementById(`${dueId}`)

  const dateObj = new Date()
  const year = dateObj.getUTCFullYear()
  const month = dateObj.getUTCMonth()
  const day = dateObj.getUTCDay()
  const today = `${year}-${month}-${day}`

  if (props.due_date < today) {
    dueDate?.classList.add("text-red-600")
  } else {
    dueDate?.classList.add("text-slate-500")
  }

  return (
    <li className="todo stack-small my-2 flex items-center">
      <button
        type="button"
        className="btn btn__danger mx-1"
        onClick={() => props.deleteTask(props.id)}
      >
        Complete
      </button>
      <div className="flex flex-col mx-2">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          className="hidden"
        />
        <label htmlFor={props.id} data-taskid={props.id}>
          {props.name}
        </label>
        <small id={dueId} className="fs-1">
          due: {props.due_date}
        </small>
      </div>
    </li>
  )
}

export default function TaskItem(props: any) {
  let dueId = "due-" + props.id
  const dueDate = document.getElementById(`${dueId}`)
  console.log("prop", props.due_date, "func", Date.UTC)

  if (props.due_date < Date.toString) {
    dueDate?.classList.add("text-red-600")
  } else {
    return
  }

  return (
    <li className="todo stack-small my-2 flex items-center">
      <button
        type="button"
        className="btn btn__danger mx-1"
        onClick={() => props.deleteTask(props.id)}
      >
        Delete
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

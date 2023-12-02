export default function TaskItem(props: any) {
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
        <label htmlFor={props.id} data-taskId={props.id}>
          {props.name}
        </label>
        <small>due: {props.due_date}</small>
        <small>id: {props.id}</small>
      </div>
    </li>
  )
}

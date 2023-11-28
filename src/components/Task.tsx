export default function TaskItem(props: any) {
  return (
    <li className="todo stack-small my-2 flex items-center">
      <div className="c-cb mx-1">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label mx-1" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <div className="btn-group mx-1">
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

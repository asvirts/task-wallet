const Todo = ({ text, completed }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          // TODO: Update the todo list
        }}
      />
      {text}
    </li>
  )
}

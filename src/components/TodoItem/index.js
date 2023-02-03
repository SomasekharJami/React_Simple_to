import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="listItem">
      <p className="listP">{title}</p>
      <button className="bton" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

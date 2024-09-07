
const EditItem = () => {
  return (
    <form className="max-w-4xl mx-auto p-4">
        <input type="text" name="title" placeholder="Task Title" required />
        <textarea name="description" id="description" placeholder="Task Description"></textarea>
        <select name="priority" id="priority" required>
            <option value="">** Choose Priority **</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <select name="status" id="" required>
            <option value="">** Choose priority of the task **</option>
            <option value="pending">Pending</option>
            <option value="inProgress">In-Progress</option>
            <option value="completed">Completed</option>
        </select>
        <input type="date" name="dueDate" id="dueDate" />
        <button type="submit">Update Task</button>
    </form>
  )
}

export default EditItem
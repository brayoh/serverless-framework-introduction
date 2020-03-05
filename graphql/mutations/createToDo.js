
mutation createTodo($input: ToDoCreateInput! ) {
  createTodo(input: $input) {
    id
    createdAt
    updatedAt
    completed
    description
    dueDate
  }
}
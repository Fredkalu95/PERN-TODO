import { Fragment, useEffect, useState } from "react";
import { EditTodo } from "./EditTodo";

interface IListTodos {
  todo_id: number;
  description: string;
}

export const ListTodos = () => {
  const [todos, setTodos] = useState<IListTodos[]>([]);

  const deleteTodo = async (id: number) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      setTimeout(() => {
        alert("To do successfully deleted");
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    void getTodos();
  }, [todos]);

  return (
    <Fragment>
      {" "}
      <table className="table table-condensed mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                  <EditTodo todo={todo}/>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

import React from "react";
import { deleteTodo, editTodo } from "../Controller/TodoController";
import close from "../assets/close.png";
import edit from "../assets/pencil.png";
function ViewTodo({ item, todo, setTodo, editSelectTodoCall, isEdit }) {
  const onChange = (todoModel) => {
    const request = {
      id: todoModel.id,
      name: todoModel.name,
      id_list: todoModel.id_list,
      completed: !todoModel.completed,
    };
    editTodo(request, todo, setTodo);
  };

  const deleteTocoCall = (id) => {
    if (isEdit.id !== id) {
      deleteTodo(id, todo, setTodo);
    }
  };

  const style = {
    textDecoration: "line-through",
    color: "#c3c3c3",
  };
  return (
    <tr style={item.completed ? style : null}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>
        <input
          type="checkbox"
          disabled={isEdit.length !== 0}
          defaultChecked={item.completed}
          onChange={() => onChange(item)}
        ></input>
      </td>
      <td>
        <li
          style={{ backgroundImage: "url(" + close + ")" }}
          onClick={() => {
            deleteTocoCall(item.id);
          }}
        ></li>
      </td>
      <td>
        {!item.completed ? (
          <li
            style={{ backgroundImage: "url(" + edit + ")" }}
            onClick={() => {
              editSelectTodoCall(item);
            }}
          ></li>
        ) : null}
      </td>
    </tr>
  );
}

export default ViewTodo;

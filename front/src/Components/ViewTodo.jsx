import React from 'react';
import { deleteTodo, editTodo } from '../Controller/TodoController';

function ViewTodo({item,todo,setTodo,editSelectTodoCall}) {
   const onChange=(todoModel)=>{
       const request={
           id:todoModel.id,
           name:todoModel.name,
           id_list:todoModel.id_list,
           completed:!todoModel.completed
       }
    editTodo(request,todo,setTodo)
   }

   const deleteTocoCall=(id)=>{
    deleteTodo(id,todo,setTodo)
   }

   const style={
    textDecoration: 'line-through',
    color: '#c3c3c3'
   }
    return (
   
         <tr key={item.id} style={item.completed?style:null}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td><input type="checkbox" defaultChecked={item.completed} onChange={() => onChange( item)}></input></td>
                        <td><button onClick={()=>{deleteTocoCall(item.id)}}>Eliminar</button></td>
                        <td><button disabled={item.completed} onClick={() => editSelectTodoCall(item)}>Editar</button></td>
            </tr>

    );
}

export default ViewTodo;
import React,{useContext,useEffect,useState} from 'react';
import {deleteList} from '../Controller/ListController'
import {listContext} from '../Context/context'
import ViewTodo from './ViewTodo';
import { addTodo } from '../Controller/TodoController';

function ViewList({item}) {
    const {list,setList}=useContext(listContext);
    const [input,setInput]=useState("");
    const [todo,setTodo]=useState([]);
    useEffect(()=>{
        if(item.todoModel!==null){
            setTodo(item.todoModel)
        }
    },[])
    const deleteListCall=(id)=>{
        deleteList(id,list,setList)
    }

    const addTodoCall=()=>{
        addTodo(input,todo,setTodo,item.id)
        setInput("")
    }

    const editSelectTodoCall=(item)=>{
        console.log(item);
    }

    return (
        <div>
            {item.name} 
            <button onClick={()=>{deleteListCall(item.id)}}>Eliminar</button>
            <br/>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={addTodoCall}>Agregar</button>
            <br/>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre</td>
            <td>¿Completo?</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
            {
                todo.map((item,index)=>{
                    return(
                        <ViewTodo item={item} todo={todo} setTodo={setTodo} editSelectTodoCall={editSelectTodoCall}></ViewTodo>
                    )
                })
            }
              </tbody>
                        </table>

        </div>
    );
}

export default ViewList;
import React,{useContext,useEffect,useState} from 'react';
import {deleteList} from '../Controller/ListController'
import {listContext} from '../Context/context'
import ViewTodo from './ViewTodo';
import { addTodo, editTodo } from '../Controller/TodoController';

function ViewList({item}) {
    const {list,setList}=useContext(listContext);
    const [input,setInput]=useState("");
    const [todo,setTodo]=useState([]);
    const [select,setSelect]=useState([]);
    useEffect(()=>{
        if(item.todoModel!==null){
            setTodo(item.todoModel)
        }
    },[])
    const deleteListCall=(id)=>{
        deleteList(id,list,setList)
    }

    const addTodoCall=()=>{
        if(input!==""&&input[0]!==" "){
        addTodo(input,todo,setTodo,item.id)
        }
        setInput("")
    }

    const editSelectTodoCall=(item)=>{
        setSelect(item)
        setInput(item.name)
    }
    const editTodoCall=()=>{
        if(input!==""&&input[0]!==" "){
            const request={
                name:input,
                completed: select.completed,
                id_list:select.id_list,
                id: select.id
            }
            editTodo(request,todo,setTodo)
            setSelect([])
        }
        setInput("")
    }

    return (
        <div>
            {item.name} 
            <button onClick={()=>{deleteListCall(item.id)}}>Eliminar</button>
            <br/>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            {select.length!==0?<button onClick={editTodoCall}>Editar</button>:<button onClick={addTodoCall}>Agregar</button>}
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
import React,{Fragment, useContext,useEffect,useState} from 'react';
import {deleteList} from '../Controller/ListController'
import {listContext} from '../Context/context'
import ViewTodo from './ViewTodo';
import { addTodo, editTodo } from '../Controller/TodoController';
import close from '../assets/close.png';
import edit from '../assets/pencil.png';
import add from '../assets/add.png';

function ViewList({item}) {
    const {list,setList}=useContext(listContext);
    const [input,setInput]=useState("");
    const [todo,setTodo]=useState([]);
    const [select,setSelect]=useState([]);

    useEffect(()=>{
        setTodo(item.todoModel)

    },[item.todoModel])

    const deleteListCall=(id)=>{
        setTodo([])
        deleteList(id,list,setList)
    }

    const addTodoCall=()=>{
        addTodo(input,todo,setTodo,item.id)
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
        <div className="contenedor-list">
            <div className="contenedor-li-p">
            <p>{item.name} </p>
            <li className="li-short" style={{ backgroundImage: "url(" + close + ")" }} onClick={()=>{deleteListCall(item.id)}}></li>
            </div>
            <div className="contenedor-li-p">
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            {select.length!==0?<li style={{ backgroundImage: "url(" + edit + ")" }} onClick={editTodoCall}></li>:<li style={{ backgroundImage: "url(" + add + ")" }}onClick={addTodoCall}></li>}
            </div>
            <br/>
      <table style={{width:"500px"}}>
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
                todo.map((item)=>{
                    return(
                        <Fragment key={item.id}>
                        <ViewTodo item={item} todo={todo} setTodo={setTodo} editSelectTodoCall={editSelectTodoCall} isEdit={select}></ViewTodo>
                        </Fragment>
                    )
                })
            }
              </tbody>
                        </table>

        </div>
    );
}

export default ViewList;
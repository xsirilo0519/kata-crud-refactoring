import React,{useContext,useEffect,useState} from 'react';
import {deleteList} from '../Controller/ListController'
import {listContext} from '../Context/context'
import ViewTodo from './ViewTodo';

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
        
    }

    return (
        <div>
            {item.name} 
            <button onClick={()=>{deleteListCall(item.id)}}>Eliminar</button>
            <br/>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={addTodoCall}>Agregar</button>
            <br/>
            {
                todo.map((item,index)=>{

                    return(
                        <ViewTodo></ViewTodo>
                    )
                })
            }

        </div>
    );
}

export default ViewList;
import React, { Fragment, useEffect, useState,useContext } from 'react';
import {getList,addList} from '../Controller/ListController'
import ViewList from './ViewList';
import {listContext} from '../Context/context'
import add from '../assets/add.png'

function ViewBoard(props) {
    const {list,setList}=useContext(listContext);
    const [input,setInput]=useState("");
    const [msg,setMsg]=useState("");

    useEffect(()=>{
    getList(setList)
    },[setList])

    const addListCall=()=>{
        if(input!==""&&input[0]!==" "){
            addList(input,list,setList)
            setMsg("")
        }else{
            setMsg("Ingrese un texto que no tenga un espacio al inicio")
        }
        setInput("")
    }

    return (
        <div className="contenedor">
            <p>Broard</p>
            <div className="contendeor-bt-input">
            <input type="text" placeholder="Lista de TO-DO" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <li  style={{ backgroundImage: "url(" + add + ")" }} onClick={addListCall}></li>
            </div>
            <span>{msg}</span>
            <br/>
            {
                list.map((item)=>{
                    return(
                    <Fragment key={item.id}> <ViewList item={item}/></Fragment>
                    )
                })
            }

        </div>
    );
}

export default ViewBoard;
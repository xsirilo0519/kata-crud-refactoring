import React, { Fragment, useEffect, useState,useContext } from 'react';
import {getList,addList} from '../Controller/ListController'
import ViewList from './ViewList';
import {listContext} from '../Context/context'

function ViewBoard() {
    const {list,setList}=useContext(listContext);
    const [input,setInput]=useState("");

    useEffect(()=>{
    getList(setList)
    },[])

    const addListCall=()=>{
        if(input!==""&&input[0]!==" "){
            addList(input,list,setList)
        }
        setInput("")
    }

    return (
        <div>
            broard<br/>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
            <button onClick={addListCall}>Agregar</button>
            <br/>
            {
                list.map((item,index)=>{
                    return(
                    <Fragment key={index}> <ViewList item={item}/></Fragment>
                    )
                })
            }

        </div>
    );
}

export default ViewBoard;
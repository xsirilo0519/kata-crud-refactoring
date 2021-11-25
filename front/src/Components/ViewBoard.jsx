import React, { Fragment, useEffect, useState } from 'react';
import {getList,addList} from '../Controller/ListController'
import ViewList from './ViewList';

function ViewBoard(props) {
    const [input,setInput]=useState("");
    const [list, setList]=useState([]);

    useEffect(()=>{
    getList(setList)
    },[])

    const addListCall=()=>{
        if(input!==""&&input[0]!==" "){
            console.log(input.split(" ").length);
            console.log("hola");
        }
        //addList(input,list,setList)
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
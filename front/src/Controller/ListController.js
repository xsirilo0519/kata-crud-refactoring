import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HOST_API_LIST = "http://localhost:8080/list";
export const getList=async(setList)=>{

   const aux= await axios.get(HOST_API_LIST+"/lista").then(res=>{ return res.data})
   setList(aux)
   console.log("getlista");
}

export const addList=async(input,list,setList)=>{
    const listModel={
        name:input
    }
    const aux= await axios.post(HOST_API_LIST+"/todo",listModel).then(res=>{ return res.data})
    setList([...list,aux])
    console.log("addlista");
 }

const deleteList=()=>{

}
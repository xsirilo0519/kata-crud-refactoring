import axios from 'axios';

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

 export const deleteList=async(id,list,setList)=>{
    const aux= await axios.delete(HOST_API_LIST+"/"+id+"/todo").then(res=>{ return res.data})
    setList(list.filter(x=>x.id!==id))
    console.log("deletelista"+id);
}
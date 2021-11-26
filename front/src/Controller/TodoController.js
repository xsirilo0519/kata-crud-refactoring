import axios from "axios";

const HOST_API_TODO = "http://localhost:8080/todo";

export const addTodo=async(input,todo,setTodo,id)=>{
    const todoModel={
        name:input,
        id_list:id
    }
    const aux= await axios.post(HOST_API_TODO+"/todo",todoModel).then(res=>{ return res.data})
    setTodo([...todo,aux])
    console.log("addtodo");
 }

 export const deleteTodo=async(id,todo,setTodo)=>{
    await axios.delete(HOST_API_TODO+"/"+id+"/todo").then(res=>{ return res.data})
    setTodo(todo.filter(x=>x.id!==id))
    console.log("deletelista"+id);
}

export const editTodo=async(todoModel,todo,setTodo)=>{
    const aux= await axios.put(HOST_API_TODO+"/todo",todoModel).then(res=>{ return res.data})
    const todolist=todo.filter(x=>x.id!==todoModel.id)
    console.log(todolist);
    console.log(aux);
    setTodo([...todolist,aux])
    console.log("puttodo");
}
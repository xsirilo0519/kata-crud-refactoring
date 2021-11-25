import React, { Fragment, useState } from 'react';
import ViewBoard from './Components/ViewBoard';
import {listContext} from './Context/context'

const HOST_API_TODO = "http://localhost:8080/todo";

function App() {
  const [list, setList]=useState([]);
  return (
  <listContext.Provider value={{list,setList}}>
  <ViewBoard/>
  </listContext.Provider>
  )
}

export default App;

import React, {  useState } from 'react';
import ViewBoard from './Components/ViewBoard';
import {listContext} from './Context/context'

function App() {
  const [list, setList]=useState([]);
  return (
  <listContext.Provider value={{list,setList}}>
  <ViewBoard/>
  </listContext.Provider>
  )
}

export default App;

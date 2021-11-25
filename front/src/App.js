import React, { Fragment } from 'react';
import ViewBoard from './Components/ViewBoard';

const HOST_API_TODO = "http://localhost:8080/todo";

function App() {
  return (
  <Fragment>
  <ViewBoard/>
  </Fragment>
  )
}

export default App;

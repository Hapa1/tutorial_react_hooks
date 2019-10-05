import React, { useState, useEffect } from 'react';



import ResourceList from './ResourceList';
import Users from './Users';
// class App extends React.Component {
//   state = {
//     resourceName: 'posts'
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <button onClick={() => this.setState({ resourceName: 'posts' })}>Posts</button>
//         <button onClick={() => this.setState({ resourceName: 'todos' })}>Todos</button>
//         <ResourceList resourceName={this.state.resourceName}/>
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  const [ resourceName, setResourceName ] = useState('posts');
  console.log(useState('posts')[1])


  // resourceName == currentState resourceName
  // setResourceName == function that changes resourceName
  // useState == function (param == initialState), returns an array of 2 values 

  return (
    <React.Fragment>
         <button onClick={() => setResourceName('posts') }>Posts</button>
         <button onClick={() => setResourceName('todos') }>Todos</button>
         <ResourceList resourceName={resourceName}/>
       </React.Fragment>
  );
}

export default App;
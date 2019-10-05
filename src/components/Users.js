import React from 'react';
import axios from 'axios';

import useResources from './useResources';

const Users = ( props ) => {
  
  const users = useResources(props)

  return (
    <ul>
         {users.map(user => (
           <li key={user.id}>{user.name}</li>
         ))}
    </ul>
  )
}

export default Users
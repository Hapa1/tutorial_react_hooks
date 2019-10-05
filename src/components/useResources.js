import React, { useState, useEffect } from 'react'
import axios from 'axios';

const useResources = ( props ) => {

    console.log(props)

  const [ resources, setResources ] = useState([])

  const fetchResources = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/${props.resourceName}`);

    //this.setState({ resources: response.data });
    setResources(response.data)
  }

  useEffect( () => { //first parameter: callback function to determine if value changes
    fetchResources(props.resourceName)
  }, [props.resourceName] )

  return resources;

}

export default useResources;
import React, { useEffect, useState } from 'react';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { ListItemText } from '@mui/material';
import axios from "axios";



const Listcomponent = () => {
    const [items, setItems] = useState([]);
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const [mydata, setdata] = useState([]);

    useEffect(() => {
    
       
        axios.get(baseURL)
        .then((Response) => {
          setItems(Response.data);
          console.log(mydata);
        })
        .catch((error) => {
          console.log(error);
        });
      }, []);
  return (
    <>
    <h1>Name List</h1>
    <div  className='maindiv'  >
    
    <List >
      {items.map(item => (
        <ListItem key={item.id}>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  </div>
  </>
  )
}

export default Listcomponent

import { Button, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const CreateUser = () => {
    const [createdata, setcreatedata]= useState({
        name:"",
        email: "",
        username: "",
        phone: "",

    })

    const handleSubmit = (e) => {
        e.preventDefault();

    axios.post("http://localhost:4567/users", createdata) 
    .then((res)=>alert("User created successully"))   
    .catch((err)=>console.log(err))
    };


  
  
        return (
    <>
    <form onSubmit={handleSubmit}>
        <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
            <Typography variant='h3'>
                Create User
            </Typography>
            <TextField sx={{mb:2}}  onChange={(e) => setcreatedata({ ...createdata, name: e.target.value })} fullWidth label="FullName"/>
            <TextField sx={{mb:2}} onChange={(e) => setcreatedata({ ...createdata, username: e.target.value })} fullWidth label="Email"/>
            <TextField sx={{mb:2}} onChange={(e) => setcreatedata({ ...createdata, email: e.target.value })} fullWidth label="Username"/>
            <TextField sx={{mb:2}} onChange={(e) => setcreatedata({ ...createdata, phone: e.target.value })} fullWidth label="Phone"/>

            <Button variant="contained" type="submit">
          Create
        </Button>
            
        </Paper>
    </form>


    </>
  )
}

export default CreateUser

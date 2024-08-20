import { useState } from 'react'
import { Route, Routes } from "react-router-dom"; 
import './App.css'
import Home from './Screens/Home';
import CreateUser from './Screens/CreateUser';
import EditUser from './Screens/EditUser';

function App() {
 

  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="createUser" element={<CreateUser />} />
      <Route path="editUser/:id" element={<EditUser />} />
    </Routes>
      
    </>
  )
}

export default App

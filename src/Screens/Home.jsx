
import React, { useEffect, useState } from 'react'

import Tables from '../Components/Table'
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios

      .get("http://localhost:4567/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);
  return (
    <Box>
         <Button
        onClick={() => navigate("/createUser")}
        sx={{ marginBottom: 2,ml:"590px", marginTop: 3 }}
        variant="contained"
      >
        Create new User
      </Button>
      <Tables data={userData} />
    </Box>
  )
}

export default Home


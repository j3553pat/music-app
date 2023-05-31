import {React, useState} from 'react';
import "./App.css";
import NavBar from './navigationBar';
import Dashboard from './menuBar';
import { Button, TextField, Card } from "@mui/material";

export default function AppBarClick() {
  const [loggedIn, setLoggedIn] = useState(false);

const logInFunction = () => {
  let status = loggedIn === false ? true : false;
  setLoggedIn(status);
}
  return (
    <Card >
    <div className='musicApp'>
    <NavBar />
    {!loggedIn ? 
      <form className="formLogin">
        <TextField
          label="Username *"
          variant="standard"
          className="MuiTextField-root"
        />
        <br />
        <TextField
          label="Password *"
          type="password"
          variant="standard"
          className="MuiTextField-root"
        />
        <div>
          <Button
            variant="contained"
            onClick={logInFunction}
            sx={{
              width: 300,
              marginTop: 4,
            }}
          >
            LOGIN
          </Button>
        </div>
      </form> : <Dashboard />
    }
  </div>
</Card>
  )
}


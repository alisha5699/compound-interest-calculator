import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './index.css';


const App = () => {
  const[p, setP]=useState(0)
  const[t, setT] = useState(0)
  const[r, setR] = useState(0)
  const[Ci, setCi] = useState(0)

  const calculate = () =>{
      setCi(p*(1+(r/100))^t)
    }
  
  return (
    <div className="App">
       <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Compound Interest Calculator
          </Typography>

    
        </Toolbar>
      </AppBar>

      <br/><TextField onChange={(event)=>setP(event.target.value)} id="outlined-basic" label="Amount you want to deposit" variant="outlined" />
      <br/><br/><TextField onChange={(event)=>setR(event.target.value)} id="outlined-basic" label="Rate" variant="outlined" />
      <br/><br/><TextField onChange={(event)=>setT(event.target.value)} id="outlined-basic" label="Time" variant="outlined" />
      <br/><br/><Button onClick={()=>calculate()} variant="contained">Calculate</Button>

      <br/><p>Amount you will receive = {Ci} </p>
     
    </div>
  );
}

export default App;

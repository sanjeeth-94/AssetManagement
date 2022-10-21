import React from 'react'
import TextField from '@mui/material/TextField';
import './Amc.css'
import Servicedueview from './Servicedueview';

const Serviceduedate = () => {
  return (
    <div>
        <div >
        <form>
            <div>
            SERVICE DUE DATE
            <hr style={{bottom:'solid',}}/>
            </div>
            <div className='search' style={{display:'flex',}}>
                <label>Search :</label>
                <TextField
                id="outlined-size-small"
                defaultValue="Search"
                size="small"
              />
            </div>
            <hr style={{bottom:'solid'}}/>
        </form>

      <Servicedueview />
      </div>
    </div>
  )
}

export default Serviceduedate;
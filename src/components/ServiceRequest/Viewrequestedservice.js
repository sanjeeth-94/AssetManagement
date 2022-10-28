import React from 'react'
import TextField from '@mui/material/TextField';
import Requestviewtable from './Requestviewtable';

const Viewrequestedservice = () => {
  return (
    <div>
        <div style={{border:'solid' , borderColor:'whitesmoke'}}>
        <form>
            <div>
            View Requested Service
            <hr style={{bottom:'solid'}}/>
            </div>
            <div className='search'>
                <label>Search : </label>
                <TextField
                id="outlined-size-small"
                defaultValue="Search"
                size="small"/>
            </div>
            <hr style={{bottom:'solid'}}/>
        </form>
      <Requestviewtable />
      </div>
    </div>
  )
}

export default Viewrequestedservice;
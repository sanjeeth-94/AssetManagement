import React from 'react'
import TextField from '@mui/material/TextField';
import './Maintenance.css'
import Pendingview from './Pendingview';

const MaintenancePending = () => {
  return (
    <div>
        <div >
        <form>
            <div>
            MAINTENANCE STATUS
            <hr style={{bottom:'solid'}}/>
            </div>
            <div className='search'>
                <label>Search : </label>
                <TextField
                id="outlined-size-small"
                defaultValue="Search"
                size="small"
              />
            </div>
            <hr style={{bottom:'solid'}}/>
        </form>

      <Pendingview />
      </div>
    </div>
  )
}

export default MaintenancePending;
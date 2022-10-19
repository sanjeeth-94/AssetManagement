import React from 'react'
import TextField from '@mui/material/TextField';
import './Maintenance.css'
import Rejectview from './Rejectview';

const MaintenanceReject = () => {
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

      <Rejectview />
      </div>
    </div>
  )
}

export default MaintenanceReject;
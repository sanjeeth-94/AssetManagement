import React from 'react'
import TextField from '@mui/material/TextField';
import Syncview from './Syncview';

const Auditsync = () => {
  return (
    <div>
        <div >
        <form>
            <div>
           AUDIT SYNC
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

      <Syncview />
      </div>
    </div>
  )
}

export default Auditsync;


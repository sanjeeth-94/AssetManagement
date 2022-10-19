import React from 'react'
import TextField from '@mui/material/TextField';
// import './Maintenance.css'
import Assetviewtable from './Assetviewtable';

const Assetview = () => {
    return(
        <div>
             <form>
                    <div style={{marginLeft:'40px'}}>
                        VIEW ASSET
                   
                    </div>
                    <hr style={{bottom:'solid',
                        background:'whitesmoke' }}/>
                    <div style={{marginLeft:'730px',display:'flex',alignItems:'center'}}>
                        <label>Search : </label>
                        <TextField
                        id="outlined-size-small"
                        defaultValue="Search"
                        size="small"/>
                    </div>
                    <hr style={{bottom:'solid'}}/>
                </form>
                <Assetviewtable />
            </div>
        )
}

export default Assetview;
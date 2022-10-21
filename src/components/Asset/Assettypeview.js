import React from 'react'
import TextField from '@mui/material/TextField';
import './Asset.css'
import Assettypetable from './Assettypetable';

const Assettypeview = () => {
    return(
        <div>
            <form>
                <div style={{marginLeft:'40px'}}>
                    VIEW ASSET TYPE               
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
            <Assettypetable />
        </div>
    )
}

export default Assettypeview;
import React from 'react'
import TextField from '@mui/material/TextField';
import Deptviewtable from './Deptviewtable';

const Deptview = () => {
    return(
        <div>
            <form>
                <div style={{marginLeft:'40px'}}>
                    VIEW DEPARTMENT                  
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
                <Deptviewtable />
        </div>
    )
}

export default Deptview;
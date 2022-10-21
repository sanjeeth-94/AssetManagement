import React from 'react'
import TextField from '@mui/material/TextField';
import Tagassettable from './Tagassettable';

const Tagassethead = () => {
    return(
        <div>
            <div>
                <form>
                    <div>
                        TAG ASSET
                        <hr style={{bottom:'solid'}}/>
                    </div>
                    <div>
                        <label>Search : </label>
                        <TextField
                        id="outlined-size-small"
                        defaultValue="Search"
                        size="small"/>
                    </div>
                    <hr style={{bottom:'solid'}}/>
                </form>
                <Tagassettable />
            </div>
        </div>
    )
}

export default Tagassethead;
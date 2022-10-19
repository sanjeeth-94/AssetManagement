import React from 'react'
import TextField from '@mui/material/TextField';
import Untagassettable from './Untagassettable';

const Untagasset = () => {
    return(
        <div>
            <div>
                <form>
                    <div>
                        UNTAG ASSET
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
                <Untagassettable />
            </div>
        </div>
    )
}

export default Untagasset;
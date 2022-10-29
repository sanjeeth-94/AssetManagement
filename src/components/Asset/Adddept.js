import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import AddIcon from '@mui/icons-material/Add';
import './Asset.css'

export default function Adddept() {
    const [department_name, setDepartmentname] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
      fetch("http://192.168.1.174:8000/api/department/showData",
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
  
        })
        .then(response => response.json())
        .then((dataObject) => {
          setDepartmentname(dataObject.data);
        })
    }, []);
  
  
    const url = 'http://192.168.1.174:8000/api/department/add'
  
    
  
    function onSubmit(e) {
      e.preventDefault();
      //APPI token 
      fetch(url, {
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
          // 'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify({
          department_name: department_name,
          description: description, 
        }),
        referrerPolicy: 'no-referrer'
  
      }).then(response => response.json()).then(json => {
        console.log('json', json)
        localStorage.setItem("", JSON.stringify(JSON));
        // sessionStorage.setItem("userDetails", JSON.stringify(json));
        setOpen(false);
          
      }).catch(e => {
        console.log("e", e)
      })
  
    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };
 

    return (
        <div className='addbutton'>
            <Button variant="outlined" onClick={handleClickOpen}>
            <AddIcon className='Add'/>
                Add
            </Button>
            <div>
                <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" fullWidth>
                    <DialogTitle id="alert-dialog-title" style={{background:'whitesmoke'}}>
                      {"ADD DEPARTMENT"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <form onSubmit={onSubmit}>
                                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label style={{marginLeft:'1px'}}>Department Name:</label>
                                    <TextField style={{marginLeft:'20px', width:'250px'}} 
                                    id="outlined-basic"
                                     label=""
                                      variant="outlined"
                                     onChange={((e)=>{setDepartmentname(e.target.value)})}

                                     />
                                </div>
                                <div style={{marginTop:'10px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                                    <label>Description:</label>
                                    <TextareaAutosize
                                    style={{ width:'250px', height:'40px',marginLeft:'70px', marginTop:'20px'}}
                                     aria-label="empty textarea"
                                    placeholder="Address"
                                    onChange={((e)=>{setDescription(e.target.value)})}/>
                                </div>
                                <div style={{marginTop:'30px', marginLeft:'200px'}}>
                                    <Button type='submit' variant="contained">ADD</Button>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
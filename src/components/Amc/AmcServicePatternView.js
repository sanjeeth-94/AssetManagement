// import React, { useEffect, useState } from 'react';
// import Dialog from '@mui/material/Dialog';
// import TextField from '@mui/material/TextField';
// import { DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';
// import { Grid } from '@mui/material';
// import Button from '@mui/material/Button';
// import DialogActions from '@mui/material/DialogActions';

// const AmcServicePatternView = ({ open, setOpen, editData}) => {
//   const [rows, setRows] = useState([]);
//   const [editData2, setEditData2] = useState('');
//   const [name,setName]=useState('');
//   const [DateFrom,setDateFrom]=useState('');
//   const [DateTo,setDateTo]=useState('');
//   const [vendorName,setVendorName]=useState('');
//   const [periodFrom,setPeriodFrom]=useState('');
//   const [periodTo,setPeriodTo]=useState('');
//   const [s1DateFrom,sets1DateFrom]=useState('');
//   const [s1DateTo,sets1DateTo]=useState('');
//   const [s2DateFrom,sets2DateFrom]=useState('');
//   const [s2DateTo,sets2DateTo]=useState('');
//   const [s3DateFrom,sets3DateFrom]=useState('');
//   const [s3DateTo,sets3DateTo]=useState('');
//   const [s4DateFrom,sets4DateFrom]=useState('');
//   const [s4DateTo,sets4DateTo]=useState('');
//   const [s5DateFrom,sets5DateFrom]=useState('');
//   const [s5DateTo,sets5DateTo]=useState('');
//   const [servicePattern,setServicePattern]=useState('');
//     const handleClose = () => {
//     setOpen(false);
//   };

//   useEffect(()=>{
//     setVendorName(editData?.vendorName ||'');
//     setPeriodFrom(editData?.periodFrom ||'');
//     setPeriodTo(editData?.periodTo || '');
//   })

//   const handleChangefirstServiceFrom = (e) => {
//     setFirstServiceFrom(e.target.value);
//     console.log(e.target.value);
//   };

//   const handleChangefirstServiceTo = (e) => {
//     setFirstServiceTo(e.target.value);
//     console.log(e.target.value);
//   };


//   const handleChanges1DateFrom =() => {
//     sets1DateFrom(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges1DateTo=()=>{
//     sets1DateTo(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges2DateFrom=()=>{
//     sets2DateFrom(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges2DateTo=()=>{
//     sets2DateTo(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges3DateFrom=()=>{
//     sets3DateFrom(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges3DateTo=()=>{
//     sets3DateTo(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges4DateFrom=()=>{
//     sets4DateFrom(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges4DateTo=()=>{
//     sets4DateTo(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges5DateFrom=()=>{
//     sets5DateFrom(e.target.value);
//     console.log(e.target.value);
//   }

//   const handleChanges5DateTo=()=>{
//     sets5DateTo(e.target.value);
//     console.log(e.target.value);
//   }

  
 
  
  
//   return (
//     <div>
//       <Dialog 
//       open={open}
//       onClose={handleClose}
//       fullWidth
//       maxWidth='lg'>
//         <form>
//           <DialogTitle id="alert-dialog-title" style={{ background: 'whitesmoke' }}>
//             {"SERVICE DETAILS"}
//           </DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               <form>
//                 <Grid  container spacing={2} style={{ marginTop: '20px'}}>
//                   <Grid xs={12} sm={6} md={1} lg={1} xl={1} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                     <label >Name: </label>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={2} lg={2} xl={2} >
//                       <TextField id="" 
//                       fullwidth
//                       label="" 
//                       variant="outlined" 
//                       value={vendorName} />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={2} lg={2} xl={2} style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                       <label >Date From: </label>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
//                       <TextField id="" 
//                       fullwidth
//                       label="" 
//                       variant="outlined" 
//                       value={periodFrom} />
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={2} lg={2} xl={2}    style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                       <label >Date To :</label>
//                     </Grid>
//                     <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
//                       <TextField id="" 
//                       fullwidth
//                       label="" 
//                       variant="outlined" 
//                       value={periodTo} />
//                     </Grid>
//                   </Grid>
//                   { servicePattern >=1 && (
//                     <Grid container spacing={2} style={{ marginTop: '20px'}}>
//                       <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
//                       style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                         <label>1 Service: FROM: </label>
//                       </Grid>
//                       <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
//                         <TextField
//                         fullWidth
//                         id=""
//                         variant="outlined"
//                         type='date'
//                         value={s1DateFrom}
//                         onChange={(e) => { handleChanges1DateFrom(e) }}/>
//                       </Grid>
//                       <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
//                       style={{ alignSelf: 'center', textAlignLast: 'center' }}>
//                         <label>To:</label>
//                       </Grid>
//                       <Grid item xs={12}  sm={6} md={2} lg={2} xl={2}>
//                         <TextField
//                         fullWidth
//                         id=""
//                         variant="outlined"
//                         type='date'
//                         value={s1DateTo}
//                         onChange={(e) => { handleChanges1DateTo(e) }}/>
//                       </Grid>
                      
//                     </Grid>
//                     )
//                   }
//                   { servicePattern >=2 && (
//                     <Grid container spacing={2} style={{ marginTop: '20px'}}>
//                       <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
//                       style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                         <label>2 Service: FROM: </label>
//                         </Grid>
//                         <Grid item xs={12} sm={6}  md={2} lg={2} xl={2} >
//                           <TextField
//                           fullWidth
//                           id=""
//                           variant="outlined"
//                           type='date'
//                           value={s2DateFrom}
//                           onChange={(e) => { handleChanges2DateFrom(e) }}/>
//                         </Grid>
//                         <Grid item xs={12} sm={6} md={2} lg={2} xl={2}
//                         style={{ alignSelf: 'center', textAlignLast: 'center' }}>
//                           <label>To:</label>
//                         </Grid>
//                         <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
//                           <TextField
//                           fullWidth
//                           id=""
//                           variant="outlined"
//                           type='date'
//                           value={s2DateTo}
//                           onChange={(e) => { handleChanges2DateTo(e) }}/>
//                         </Grid>
                       
//                       </Grid>
//                     )
//                   }
//                   {servicePattern >=3 && (
//                         <Grid container spacing={2} style={{ marginTop: '20px'}}>
//                           <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
//                             style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                             <label>3 Service: FROM: </label>
//                           </Grid>
//                           <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
//                             <TextField
//                             fullWidth
//                             id=""
//                             variant="outlined"
//                             type='date'
//                             value={s3DateFrom}
//                             onChange={(e) => { handleChanges3DateFrom(e) }}/>
//                           </Grid>
//                           <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
//                           style={{ alignSelf: 'center', textAlignLast: 'center' }}>
//                             <label>To:</label>
//                           </Grid>
//                           <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
//                             <TextField
//                             fullWidth
//                             id=""
//                             variant="outlined"
//                             type='date'
//                             value={s3DateTo}
//                             onChange={(e) => { handleChanges3DateTo(e) }}/>
//                           </Grid>
                          
//                         </Grid>
//                     )
//                   }
//                   {servicePattern >=4 && (
//                         <Grid container spacing={2} style={{ marginTop: '20px'}}>
//                           <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
//                             style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                             <label>4 Service: FROM: </label>
//                           </Grid>
//                           <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}  >
//                           <TextField
//                           fullWidth
//                           id=""
//                           variant="outlined"
//                           type='date'
//                           value={s4DateFrom}
//                           onChange={(e) => { handleChanges4DateFrom(e) }}/>
//                           </Grid>
//                           <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
//                           style={{ alignSelf: 'center', textAlignLast: 'center' }}>
//                             <label>To:</label>
//                           </Grid>
//                           <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
//                             <TextField
//                             fullWidth
//                             id=""
//                             variant="outlined"
//                             type='date'
//                             value={s4DateTo}
//                             onChange={(e) => { handleChanges4DateTo(e) }}/>
//                           </Grid>
                         
//                         </Grid>
//                     )
//                   }
//                   { servicePattern >=5 && (
//                         <Grid container spacing={2} style={{ marginTop: '20px'}}>
//                           <Grid item  xs={12} sm={6} md={2} lg={2} xl={2}
//                             style={{ alignSelf: 'center', textAlignLast: 'center'}}>
//                             <label>5 Service: FROM: </label>
//                             </Grid>
//                             <Grid item xs={12} sm={6}  md={2} lg={2} xl={2}>
//                               <TextField
//                               fullWidth
//                               id=""
//                               variant="outlined"
//                               type='date'
//                               value={s5DateFrom}
//                               onChange={(e) => { handleChanges5DateFrom(e) }}/>
//                             </Grid>
//                             <Grid item xs={12} sm={6} md={2} lg={2} xl={2} 
//                           style={{ alignSelf: 'center', textAlignLast: 'center' }}>
//                               <label>To:</label>
//                             </Grid>
//                             <Grid item xs={12}  sm={9} md={2} lg={2} xl={2}>
//                               <TextField
//                               fullWidth
//                               id=""
//                               variant="outlined"
//                               type='date'
//                               value={s5DateTo}
//                               onChange={(e) => { handleChanges5DateTo(e) }}/>
//                             </Grid>
                           
//                         </Grid>
//                     )
//                   }
//                 </form>
//               </DialogContentText>
//             </DialogContent>
//           <DialogActions>
//             <div className='addbutton'>
//               <Button type="submit" style={{ border: 'solid', width: '150px' }}  autoFocus>
//                 Update
//               </Button>
//               <Button type='reset' onClick={handleClose}>Cancel</Button>
//             </div>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </div>
//   )
// }

// export default AmcServicePatternView

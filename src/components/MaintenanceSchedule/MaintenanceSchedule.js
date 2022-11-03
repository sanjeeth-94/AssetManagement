import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Stack from '@mui/material/Stack';

const columns = [
    { field: 'AMC Status', headerName: 'AMC Status', width: 320 },
    { field: 'Warranty Status', headerName: 'Warranty Status', width: 320 },
    { field: 'Warranty Type', headerName: 'Warranty Type', width: 380 },
];

  const rows = [
  
  ];

const steps = ['Step 1', 'Step 2', 'Step 3','Complete'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] =useState(0);
  const [skipped, setSkipped] =useState(new Set());
  const [targetForm, setTargetFrom] = useState('s')


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const setTagAssetType = (event) => {
        setTagAssetType(event.target.value);
      };

  return (
    <div>
        <div>
            <h2>Maintenance Schedule</h2>
        </div>
        <form style={{width:'1240px',border:'solid', borderColor:'whitesmoke'}}>
            <div>
                <h3>Create Maintenance Schedule</h3>
            </div>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption"></Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}>
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
            <form style={{width:'200%',border:'solid', borderColor:'whitesmoke'}}>
                <div>
                    <label>Select Asset</label>
                </div>
                <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                    <Box>
                        <FormControl style={{width:'250px' ,marginLeft:'28px', marginBottom:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Select Department</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Department"
                            onChange={handleChange}>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl style={{width:'250px' ,marginLeft:'28px', marginBottom:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Select Department First</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Department"
                            onChange={handleChange}>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl style={{width:'250px' ,marginLeft:'28px', marginBottom:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Select Section First</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Department"
                            onChange={handleChange}>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl style={{width:'250px' ,marginLeft:'28px', marginBottom:'20px'}}>
                            <InputLabel id="demo-simple-select-label">Select Asset Type First</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Select Department"
                            onChange={handleChange}>
                            </Select>
                        </FormControl>
                    </Box>
                </div>                
            </form>
            <div>
                <form>
                    <div style={{ height: 200, width: '1000px', marginTop: '30px', marginLeft:'30px' ,marginRight:'30px'}}>
                        <DataGrid
                        style={{background:'whitesmoke'}}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}/>
                    </div>
                </form>
            </div>
            <div>
                <form>
                    <div>
                        <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                            <label style={{marginLeft:'5px'}}>Maintenance Id:  </label>
                            <TextField style={{marginLeft:'50px', width:'450px'}} id="outlined-basic" label="Outlined" variant="outlined" />
                        </div>
                        <div style={{marginTop:'20px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                            <Box>
                                <label style={{ marginLeft: '30', marginRight: '20px' }}>Maintenance Type :</label>
                                <FormControl style={{width:'250px' ,marginLeft:'28px', marginBottom:'20px'}}>
                                    <InputLabel id="demo-simple-select-label">Maintenance Type </InputLabel>
                                    <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Select Department"
                                    onChange={handleChange}>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                        <div style={{marginTop:'5px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                            <label style={{marginLeft:'5px'}}>Severity :  </label>
                            <FormControl>
                                <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={setTagAssetType}
                                onChange={setTagAssetType}>
                                    <FormControlLabel style={{marginLeft:'80px'}}value="Critical" control={<Radio />} label="Critical" />
                                    <FormControlLabel style={{marginLeft:'80px'}} value="Emergency" control={<Radio />} label="Emergency" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div style={{marginTop:'10px',marginLeft:'5px', width:'150vh', display:'flex', alignItems:'center'}}>
                            <label>Problem Note:</label>
                            <TextareaAutosize
                            style={{ width:'250px', height:'40px',marginLeft:'70px', marginTop:'20px'}}
                            aria-label="empty textarea"
                            placeholder=""/>
                        </div>
                        <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                            <label >Warranty Document:</label>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button style={{marginLeft: '20px'}}variant="contained" component="label">
                                     Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </Stack>
                        </div>
                        <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                            <label >Warranty Document:</label>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button style={{marginLeft: '20px'}}variant="contained" component="label">
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </Stack>                           
                        </div>
                        <div style={{ marginTop: '20px', marginLeft: '5px', width: '150vh', display: 'flex', alignItems: 'center' }}>
                            <label >Warranty Document:</label>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Button style={{marginLeft: '20px'}}variant="contained" component="label">
                                    Upload
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </Stack>
                        </div>
                    </div>
                </form>
            </div>
        </form>
    </div>
  );

}





            

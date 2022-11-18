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
import { FormLabel, Grid, StepButton } from '@mui/material';

const columns = [
    { field: 'AMC Status', headerName: 'AMC Status', width: 320 },
    { field: 'Warranty Status', headerName: 'Warranty Status', width: 320 },
    { field: 'Warranty Type', headerName: 'Warranty Type', width: 380 },
];

const rows = [

];

const steps = ['Step 1', 'Step 2', 'Step 3', 'Complete'];

export default function HorizontalLinearStepper() {

    const [canceledCheque, setcanceledCheque] = useState('');
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [targetForm, setTargetFrom] = useState('')


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
                <h2 style={{ marginLeft: '40px' }}>Maintenance Schedule</h2>
            </div>
            <form style={{ width: '95%', border: 'solid', borderColor: 'whitesmoke', marginLeft: '30px' }}>
                <div>
                    <h3 style={{ marginLeft: '30px' }}>Create Maintenance Schedule</h3>
                </div>
                <hr />
                <Box sx={{ width: '90%', marginLeft: '100px', marginTop: '30px' }}>
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
                    {
                        activeStep === 0 &&

                        <>
                            <form style={{ width: '90%', border: 'solid', borderColor: 'whitesmoke', marginLeft: '0px', marginTop: '20px' }}>
                                <div>
                                    <h3 style={{ marginLeft: '30px' }}>Select Asset</h3>
                                </div>
                                <div style={{ marginTop: '20px', marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
                                    <Box>
                                        <FormControl style={{ width: '200px', marginLeft: '28px', marginBottom: '20px' }}>
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
                                        <FormControl style={{ width: '250px', marginLeft: '28px', marginBottom: '20px' }}>
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
                                        <FormControl style={{ width: '250px', marginLeft: '28px', marginBottom: '20px' }}>
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
                                        <FormControl style={{ width: '250px', marginLeft: '28px', marginBottom: '20px' }}>
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
                            <div style={{ height: 200, width: '1000px', marginTop: '30px', marginLeft: '70px', marginRight: '30px', marginBottom: '10px' }}>
                                <DataGrid
                                    style={{ background: 'whitesmoke' }}
                                    rows={rows}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]} />
                            </div>
                        </>
                    }

                    {
                        activeStep === 1 &&
                        <>
                            <Grid container spacing={2} style={{ marginTop: '20px' }}>

                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',
                                        textAlignLast: 'center'
                                    }}
                                >
                                    <label>Maintenance Id:</label>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',
                                        width: '300px'
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="Vendor-Address"
                                        variant="outlined"

                                    />

                                </Grid>


                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',
                                        textAlignLast: 'center'
                                    }}
                                >
                                    <label>Maintenance Type:</label>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',

                                        width: '300px'
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="Vendor-Address"
                                        variant="outlined"

                                    />

                                </Grid>
                            </Grid>
                            <Grid container spacing={2} style={{ marginTop: '20px' }}>

                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',
                                        textAlignLast: 'center'
                                    }}
                                >
                                    <label>Severity:</label>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',

                                        width: '300px'
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="Vendor-Address"
                                        variant="outlined"

                                    />

                                </Grid>


                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',
                                        textAlignLast: 'center'
                                    }}
                                >
                                    <label>Problem Note:</label>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{
                                        alignSelf: 'center',

                                        width: '300px'
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        id="Vendor-Address"
                                        variant="outlined"

                                    />

                                </Grid>
                            </Grid>
                            <Grid container spacing={2} style={{ marginTop: '20px' }}>

                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}
                                    style={{
                                        alignSelf: 'center',
                                        textAlignLast: 'center'
                                    }}
                                >
                                    <label>Breakdown Parts Images:</label>
                                </Grid>

                            </Grid>
                            <Grid container spacing={2} style={{ marginTop: '20px' }}>

                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{

                                        width: '200px',

                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Canceled Cheque"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setcanceledCheque(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{


                                        width: '200px',

                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Canceled Cheque"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setcanceledCheque(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                </Grid>


                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{


                                        width: '200px',

                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Canceled Cheque"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setcanceledCheque(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                </Grid>



                                <Grid item xs={12} sm={12} md={6} lg={3} xl={3}
                                    style={{


                                        width: '200px',

                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Canceled Cheque"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files.length > 0) {
                                                const reader = new FileReader();
                                                reader.onload = () => {
                                                    if (reader.readyState === 2) {
                                                        setcanceledCheque(reader.result);
                                                    }
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        InputLabelProps={{ shrink: true }}
                                        type="file"
                                    />
                                </Grid>


                            </Grid>
                        </>

                    }
                    {
                        activeStep === 2 &&
                        <>
                            <Grid container spacing={2} style={{ marginTop: '20px', marginLeft: '20px' }}>

                                <Grid tem xs={12} sm={12} md={12} lg={12} xl={12}
                                    style={{
                                        width: '200px',

                                    }}
                                >
                                    <FormControl>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                        >
                                            <FormControlLabel value="Parts" control={<Radio />} label="Parts" />
                                            <FormControlLabel value=" Consumable" control={<Radio />} label="Consumable" />
                                            <FormControlLabel value=" NA" control={<Radio />} label="NA" />

                                        </RadioGroup>
                                    </FormControl>

                                </Grid>



                            </Grid>

                            <Grid container spacing={2} style={{ marginTop: '20px', marginLeft: '20px', display: 'inline' }}>

                                <Grid container spacing={2} style={{ marginTop: '20px', marginLeft: '20px', width: '500px', }}>

                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',

                                        }}
                                    >
                                        Name:
                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',

                                        }}
                                    > <TextField
                                            fullWidth
                                            id="Vendor-Address"
                                            variant="outlined"

                                        />

                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'
                                        }}
                                    >
                                        Partid:
                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'

                                        }}
                                    > <TextField
                                            fullWidth
                                            id="Vendor-Address"
                                            variant="outlined"

                                        />

                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'
                                        }}
                                    >
                                        Quantity:
                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'

                                        }}
                                    > <TextField
                                            fullWidth
                                            id="Vendor-Address"
                                            variant="outlined"

                                        />

                                    </Grid>

                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'
                                        }}
                                    >
                                        UOM:
                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'

                                        }}
                                    > <TextField
                                            fullWidth
                                            id="Vendor-Address"
                                            variant="outlined"

                                        />

                                    </Grid>

                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'
                                        }}
                                    >
                                        Unit price:
                                    </Grid>
                                    <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                        style={{
                                            width: '200px',
                                            marginTop: '20px'

                                        }}
                                    > <TextField
                                            fullWidth
                                            id="Vendor-Address"
                                            variant="outlined"

                                        />

                                    </Grid>

                                </Grid>


                            </Grid>
                            <Grid container spacing={2} style={{ marginTop: '20px', marginLeft: '20px', }}>
                                <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                    style={{
                                        width: '200px',
                                        marginTop: '20px'
                                    }}
                                >
                                    Unit price:
                                </Grid>
                                <Grid tem xs={12} sm={12} md={6} lg={6} xl={6}
                                    style={{
                                        width: '200px',
                                        marginTop: '20px'

                                    }}
                                > <TextField
                                        fullWidth
                                        id="Vendor-Address"
                                        variant="outlined"

                                    />
                                </Grid>
                            </Grid>
                        </>
                    }
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


            </form>
        </div>
    );

}







import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchSectionListService,SectionDeleteService} from '../../../services/ApiServices';
import SectionModel from '../Section/SectionModel'
import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationBar from '../../../services/NotificationBar';

const SectionList = () => {
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [rows, setRows] = useState([]);
  const [editData, setEditData] = useState('');
  const [refresh , setRefresh]=useState(false)
  const [departmentList, setDepartmentList] = useState([]);
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
});


  const columns = [
    { field: 'id', headerName: 'Section No', width: 80 },
    { field: 'department', headerName: 'Department', width: 170, },
    { field: 'section', headerName: 'Section', width: 140 },
    {field: 'action', headerName: 'Action', width: 200, sortable: false,
      cellClassname: 'actions',
      type: 'actions',
      getActions: (params) => [
        <EditData selectedRow={params.row} />,
        <DeleteData selectedRow={params.row} />,
      ],
    }
  ];
  
  useEffect(() => {

    FetchSectionListService(handleFetchSuccess, handleFetchException);

  }, [refresh]);
  
  const handleDepartmentSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data || []);
    
  } 

  const handleDepartmentException = () =>{}
  const handleFetchSuccess = (dataObject) =>{
    setRows(dataObject.data);
  }
  
  const handleFetchException = (errorStaus, errorMessage) =>{
    console.log(errorMessage);
  }
  
  function EditData({ selectedRow }) {
    return (
      <EditIcon
      className='prbuton'
      variant="contained"
      color='primary'
      onClick={() => {
        setIsAdd(false);
        setEditData(selectedRow);
        setOpen(true);}}/>
     
    )
  }

  function DeleteData({ selectedRow }) {
    return (
      <DeleteIcon
      variant="contained"
      color='primary'
      onClick={() => {
        deleteSection(selectedRow.id)
        }}/>
      
    )
  }

  function DepartmentList({ selectedRow }) {
    return (
      <FormControl style={{width:'250px' ,marginLeft:'55px'}}>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedRow.department}
        label="Select Department"
        inputProps={{ readOnly: true }}>
          {departmentList.map((data, index) => {
             return (
              <MenuItem value={data.id} key={index}>{data.department_name}</MenuItem>
              )
            })
          }
        </Select>
      </FormControl>
    )
  }
  const deleteSection = (id) => {
    SectionDeleteService({id}, handleDeleteSuccess, handleDeleteException);
  }

  const handleDeleteSuccess = (dataObject) =>{
    console.log(dataObject);
    setRefresh(oldValue => !oldValue);
    setNotification({
      status: true,
      type: 'success',
      message: dataObject.message,
    });
  }

  const handleDeleteException = (errorObject, errorMessage) =>{
    console.log(errorMessage);
  }

  const handleModalOpen = () => {
    setIsAdd(true);
    setOpen(true);
  };
  const handleClose = () => {
    setNotification({
      status: false,
      type: '',
      message: '',
    });
  };

  return (
    <div>
      <Grid container>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
         <h3 >Section</h3>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
        <Button style={{marginLeft:'43%',width:'120px',height:'30px', marginTop:'25px'}} variant="outlined" onClick={handleModalOpen}>
          Add
        </Button>
      </Grid> 
      </Grid>
      <hr style={{ bottom: 'solid' }} />
     
      <div className='adduser' style={{ height: 270, width: '50%',marginLeft:'30px' }}>
        <DataGrid
        rows={rows}
        columns={columns} />
      </div>
      <SectionModel
          open={open}
          setOpen={setOpen}
          isAdd={isAdd}
          editData={editData}
          setRefresh={setRefresh}/>
          
      <NotificationBar
          handleClose={handleClose}
          notificationContent={openNotification.message}
          openNotification={openNotification.status}
          type={openNotification.type}
      />
    </div>
  )
}

export default SectionList

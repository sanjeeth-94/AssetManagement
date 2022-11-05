import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchDepaertmentService, FetchSectionListService } from '../../../services/ApiServices';
import SectionModel from '../Section/SectionModel'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SectionList = () => {
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [rows, setRows] = useState([]);
  const [editData, setEditData] = useState('');
  const [refresh , setRefresh]=useState(false)
  const [departmentList, setDepartmentList] = useState([]);

  const columns = [
    { field: 'id', headerName: 'Section No', width: 80 },
    { field: 'department', headerName: 'Department', width: 170,
      cellClassname: 'actions',
      type: 'actions',
      getActions: (params) => [
        <DepartmentList selectedRow={params.row}/>
      ],
    },
    { field: 'section', headerName: 'Section', width: 140 },
    {field: 'action', headerName: 'Action', width: 250, sortable: false,
      cellClassname: 'actions',
      type: 'actions',
      getActions: (params) => [
        <EditData selectedRow={params.row} />,
        <DeleteData selectedRow={params.row} />,
      ],
    }
  
  ];
  
  useEffect(() => {
    FetchDepaertmentService(handleDepartmentSuccess, handleDepartmentException);
  }, [refresh]);
  
  const handleDepartmentSuccess = (dataObject) =>{
    setDepartmentList(dataObject.data || []);
    FetchSectionListService(handleFetchSuccess, handleFetchException);
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
      <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
      className='prbuton'
      variant="contained"
      color='primary'>
        Edit
      </Button>
    )
  }

  function DeleteData({ selectedRow }) {
    return (
      <Button style={{ width: '100px' }}
      variant="contained"
      color='primary'
      onClick={() => {
        deletUser(selectedRow.id)
      }}>
        Delete
      </Button>
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
        })}
      </Select>
    </FormControl>
  )
}
  const deletUser = (id) => {
    
  }
  const handleDeleteSuccess = (dataObject) =>{
    console.log(dataObject);
    setRefresh(oldValue => !oldValue);
  }

  const handleDeleteException = (errorObject, errorMessage) =>{
    console.log(errorMessage);
  }
  const handleModalOpen = () => {
    setIsAdd(true);
    setOpen(true);
  };
  return (
    <div>
      <h1 style={{ marginLeft: '50px' }}>Asset</h1>
      <hr style={{ bottom: 'solid' }} />
      <Button style={{marginLeft:'83%',width:'120px',height:'30px', marginBottom:'20px'}} variant="outlined" onClick={handleModalOpen}>
        Add
      </Button>
      <div className='adduser' style={{ height: 270, width: '90%' }}>
        <DataGrid
          rows={rows}
          columns={columns} 
        />
      </div>
      <SectionModel
      open={open}
      setOpen={setOpen}
      isAdd={isAdd}
      editData={editData}
      setRefresh={setRefresh}/>
    </div>
  )
}

export default SectionList

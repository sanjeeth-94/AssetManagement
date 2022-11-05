import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchDepartmentListService , DepartmentDeleteService  } from '../../../services/ApiServices';
import DepartmentModel from './DepartmentModel';

const DepartmentList = () => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh , setRefresh]=useState(false)
    
    const columns = [
        { field: 'id', headerName: 'Dep No', width: 120 },
        { field: 'department_name', headerName: 'Department Name', width: 180 },
        { field: 'description', headerName: 'Description', width: 220 },
        {field: 'action', headerName: 'Action', width: 250, sortable: false,
        cellClassname: 'actions',
        type: 'actions',
        getActions: (params) => [
            <EditData selectedRow={params.row} />,
            <DeleteData selectedRow={params.row} />,
        ],
        }
    ];
    
    function EditData({ selectedRow }) {
        return (
            <Button style={{ marginLeft: '20px', marginRight: '20px', width: '100px' }}
            className='prbuton'
            variant="contained"
            color='primary'
            onClick={() => {
                setIsAdd(false);
                setEditData(selectedRow);
                setOpen(true);
            }}>
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
                deleteDepartment(selectedRow.id)
            }}>
              Delete
            </Button>
        )
    }
    
    const deleteDepartment = (id) => {
        DepartmentDeleteService ({id}, handleDeleteSuccess, handleDeleteException);
    }
    
    const handleDeleteSuccess = (dataObject) =>{
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
    }
    
    const handleDeleteException = (errorObject, errorMessage) =>{
        console.log(errorMessage);
    }
    
    useEffect(() => {
        FetchDepartmentListService(handleFetchSuccess, handleFetchException);
       
    }, [refresh]);
    
    const handleFetchSuccess = (dataObject) =>{
        setRows(dataObject.data);
    }
    
    const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }
    
    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
    };
  
    return (
        <div>
            <h1 style={{ marginLeft: '50px' }}>Manage user</h1>
            <hr style={{ bottom: 'solid' }} />
            <Button style={{marginLeft:'83%',width:'120px',height:'30px'}} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <div style={{ height: '500px', width: '90%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                rows={rows}
                columns={columns} />
            </div>
            <DepartmentModel 
             open={open}
             setOpen={setOpen}
             isAdd={isAdd}
             editData={editData}
             setRefresh={setRefresh}/>
        </div>
    )
}

export default DepartmentList;

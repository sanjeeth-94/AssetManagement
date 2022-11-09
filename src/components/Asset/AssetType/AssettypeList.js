import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { FetchAssetTypeListService , AssetTypeDeleteService,FetchAssetTypeSection} from '../../../services/ApiServices'
import AssetTypeModel from '../AssetType/AssetTypeModel'
import NotificationBar from '../../../services/NotificationBar';

const AssetTypeList= () => {
  const [open, setOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(true);
  const [rows, setRows] = useState([]);
  const [editData, setEditData] = useState('');
  const [refresh , setRefresh]=useState(false);
  const [department,setDepartment] = useState('');
  const [sectionList,setSectionList] = useState([]);
  const [openNotification, setNotification] = useState({
    status: false,
    type: 'error',
    message: '',
  });
  
  const columns = [
    { field: 'id', headerName: 'Section No', width: 80 },
    { field: 'department', headerName: 'Department', width: 170,},
    { field: 'section', headerName: 'Section', width: 170,},
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
        deleteAssetType(selectedRow.id)
      }}>
        Delete
      </Button>
    )
  }
  
  const deleteAssetType = (id) => {
    AssetTypeDeleteService ({id}, handleDeleteSuccess, handleDeleteException);
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
    setNotification({
      status: true,
      type: 'error',
      message: errorMessage,
    });
  }
  
  useEffect(() => {
    FetchAssetTypeListService(handleFetchSuccess, handleFetchException);

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
  
  const handleClose = () => {
    setNotification({
      status: false,
      type: '',
      message: '',
    });
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
      <AssetTypeModel
      open={open}
      setOpen={setOpen}
      isAdd={isAdd}
      editData={editData}
      setRefresh={setRefresh}/>
      
      <NotificationBar
      handleClose={handleClose}
      notificationContent={openNotification.message}
      openNotification={openNotification.status}
      type={openNotification.type}/>
    </div>
  )
}

export default AssetTypeList

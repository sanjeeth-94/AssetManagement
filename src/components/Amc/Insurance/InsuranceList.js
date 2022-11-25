import React, { useEffect, useState } from 'react';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import NotificationBar from '../../../services/NotificationBar';
import InsuranceModel from './InsuranceModel';
import { FetchInsuranceService } from '../../../services/ApiServices';


const InsuranceList = () => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh , setRefresh]=useState(false)
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
    });
    const columns = [
        
        { field: 'vendorName', headerName: 'Vender Name	', width: 120 },
        { field: 'periodFrom', headerName: 'Period From', width: 120 },
        { field: 'periodTo', headerName: 'Period To', width: 120 },
        { field: 'departmen', headerName: 'Department', width: 120 },
        { field: 'section', headerName: 'Section', width: 120 },
        { field: 'assetType', headerName: 'Asset Type', width: 120 },
        { field: 'assetName', headerName: 'Asset Name	', width: 120 },
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
                deleteInsurance(selectedRow.id)
                }
                }>
                Delete
            </Button>
        )
    }

    const deleteInsurance= (id) => {
       
    }
    
    useEffect(() => {
        FetchInsuranceService(handleFetchSuccess,handleFetchException)
    }, [refresh]);

    const handleFetchSuccess = (dataObject) =>{
        setRows(dataObject.data);
    }

    const handleFetchException = (errorStaus, errorMessage) =>{
        console.log(errorMessage);
    }

    const handleClose = () => {
        setOpen(false)
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };

    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);
       
    };
  return (
    <div>
    <div style={{border:'solid',borderColor:'whitesmoke'}}>
        <div style={{display:'flex',}}>
          <h3 style={{ marginLeft: '80px',marginBottom:'0px' }}>VENDER DETAILS</h3>
          
          <Button style={{marginLeft:'70%',width:'120px',height:'30px',marginTop:'20px'}} variant="outlined" onClick={handleModalOpen}>
              Add
          </Button>
          </div>
          <hr style={{ bottom: 'solid' ,borderColor:'whitesmoke'}} />

          <div style={{ height: '300px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
              <DataGrid
              rows={rows}
              columns={columns} />
          </div>
          <InsuranceModel
              open={open}
              setOpen={setOpen}
              isAdd={isAdd}
              editData={editData}
              setRefresh={setRefresh}
          />
               <NotificationBar
                  handleClose={handleClose}
                  notificationContent={openNotification.message}
                  openNotification={openNotification.status}
                  type={openNotification.type}
              />
      </div>
  </div>
  )
}

export default InsuranceList

import  React , { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';

const AssetlabelList = () => {
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
        { field: 'id', headerName: 'Serial No', width: 80 },
        { field: 'department', headerName: 'Department', width: 200 },
        { field: 'section', headerName: 'Section', width: 200 },
        { field: 'assetType', headerName: 'Asset Type', width: 200 },
        { field: 'assetId', headerName: 'Asset Id', width: 200 },
        { field: 'code', headerName: 'Code', width: 200 },
        { field: 'Date', headerName: 'Date', width: 200 },
        { field: 'Asset Name', headerName: 'Asset Name', width: 200 },
        {
            field: 'action', headerName: 'Action', width: 250, sortable: false,
            cellClassname: 'actions',
            type: 'actions',
            getActions: (params) => [
                <EditData selectedRow={params.row} />,
                <DeleteData selectedRow={params.row} />,
            ],
        }
    ];

    useEffect(() => {
        FetchAddlabelListService(handleFetchSuccess, handleFetchException);

    }, [refresh]);

    const handleFetchSuccess = (dataObject) => {
        setRows(dataObject.data);
    }

    const handleFetchException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }
    const handleClose = () => {
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };

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
                    deletVender(selectedRow.id)
                }
                }>
                Delete
            </Button>
        )
    }

    

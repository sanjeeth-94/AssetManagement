import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import { FetchVendorTypeListService, VendorTypeDeleteService } from '../../services/ApiServices';
import VendorTypeModel from './VendorTypeModel';
import NotificationBar from '../../services/NotificationBar';

const VendorTypeList = () => {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh, setRefresh] = useState(false)
    const [openNotification, setNotification] = useState({
        status: false,
        type: 'error',
        message: '',
      });

    const columns = [
        { field: 'id', headerName: 'Vendor Id', width: 120 },
        { field: 'vendorType', headerName: 'Vendor Type', width: 200 },
        { field: 'description', headerName: 'Description', width: 200 },
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

    const handleClose = () => {
        setNotification({
          status: false,
          type: '',
          message: '',
        });
      };

    useEffect(() => {
        FetchVendorTypeListService(handleFetchSuccess, handleFetchException);

    }, [refresh]);

    const handleFetchSuccess = (dataObject) => {
        setRows(dataObject.data);
    }

    const handleFetchException = (errorStaus, errorMessage) => {
        console.log(errorMessage);
    }


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
                    deletVenderType(selectedRow.id)
                }}
            >
                Delete
            </Button>
        )
    }

    const deletVenderType = (id) => {

        VendorTypeDeleteService({ id }, handleDeleteSuccess, handleDeleteException);
    }

    const handleDeleteSuccess = (dataObject) => {
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
        setNotification({
            status: true,
            type: 'success',
            message: dataObject.message,
          });     
        
    }

    const handleDeleteException = (errorObject, errorMessage) => {
        console.log(errorMessage);
        setNotification({
            status: true,
            type: 'error',
            message: errorMessage,
          });
    }


    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);


    };

    return (
        <div>
            <div style={{ marginLeft: '20px' }}>
                <h2>VIEW VENDOR TYPE</h2>
            </div>
            <hr />
            <Button style={{ marginLeft: '50%', width: '120px', height: '30px' }} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <div className='adduser' style={{ height: 400, width: '63%', marginTop: '20px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    rowsPerPageOptions={[5]}
                    onRowAdd />
            </div>
            <VendorTypeModel
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
    )
}

export default VendorTypeList

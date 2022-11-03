import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from 'reactstrap';

import { FetchVendorService,VendorDeleteService } from '../../services/ApiServices';
import VendorModel from './VendorModel';

export default function VendorList() {
    const [open, setOpen] = useState(false);
    const [isAdd, setIsAdd] = useState(true);
    const [rows, setRows] = useState([]);
    const [editData, setEditData] = useState('');
    const [refresh, setRefresh] = useState(false)

    const columns = [
        { field: 'id', headerName: 'Serial No', width: 80 },
        { field: 'vendorName', headerName: 'Name', width: 200 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'contactNo', headerName: 'Contact No', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'contactPerson', headerName: 'Contact Parson', width: 200 },
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
        FetchVendorService(handleFetchSuccess, handleFetchException);

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
                    deletVender(selectedRow.id)
                }
                }>
                Delete
            </Button>
        )
    }

    const deletVender = (id) => {

        VendorDeleteService({ id }, handleDeleteSuccess, handleDeleteException);
    }

    const handleDeleteSuccess = (dataObject) => {
        console.log(dataObject);
        setRefresh(oldValue => !oldValue);
    }

    const handleDeleteException = (errorObject, errorMessage) => {
        console.log(errorMessage);
    }

    const handleModalOpen = () => {
        setIsAdd(true);
        setOpen(true);

    };


    return (
        <div>
            <h1 style={{ marginLeft: '50px' }}>MANAGE VENDOR</h1>
            <hr style={{ bottom: 'solid' }} />
            <Button style={{ marginLeft: '83%', width: '120px', height: '30px' }} variant="outlined" onClick={handleModalOpen}>
                Add
            </Button>
            <div style={{ height: '500px', width: '95%', marginLeft: '40px', marginTop: '20px' }}>
                <DataGrid
                    rows={rows}
                    columns={columns} />
            </div>
            <VendorModel
                open={open}
                setOpen={setOpen}
                isAdd={isAdd}
                editData={editData}
                setRefresh={setRefresh}
            />

        </div>
    );
}

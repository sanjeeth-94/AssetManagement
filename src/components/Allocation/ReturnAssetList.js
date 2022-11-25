import React, { useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import { Button } from 'reactstrap';

const ReturnAssetList = () => {
    const [rows, setRows] = useState([]);
    const columns = [
        { field: '', headerName: 'Asset Id', width: 150 },
        { field: 'Returned Name', headerName: 'Returned Name ', width: 150 },
        { field: 'User Name', headerName: 'User Name', width: 150 },
        { field: 'Retun Date', headerName: ' Retun Date', width: 150 },
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
           >
                Edit
            </Button>
        )
    }


    function DeleteData({ selectedRow }) {
        return (
            <Button style={{ width: '100px' }}
            variant="contained"
            color='primary'
           >
                Delete
            </Button>
        )
    }
    
    return (
        <div>
            <form>
                <label style={{marginLeft:'500px'}}>View Asset</label>
                <hr/>
                <div style={{ height: '250px', width: '96%', marginLeft: '40px', marginTop: '20px' }}>
                    <DataGrid
                    rows={rows}
                    columns={columns} />
                </div>
            </form>
        </div>
    )
}

export default ReturnAssetList

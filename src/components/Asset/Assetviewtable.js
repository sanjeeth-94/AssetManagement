        import * as React from 'react';
        import { DataGrid } from '@mui/x-data-grid';
        import { Button } from 'reactstrap';


        const columns = [
          { field: 'Maintenance Id', headerName: 'Maintenance', width: 80 },
          { field: 'Maintenance Type', headerName: 'Maintenance Type', width: 140 },
          { field: 'Machine', headerName: 'Machine', width: 140 },
          { field: 'Severity', headerName: 'Severity', width: 140 },
          { field: 'Problem Note', headerName: 'Problem Note', width: 140 },
          { field: 'Date', headerName: 'Date', width: 140 },
          { field: 'Time', headerName: 'Time', width: 140 },
          { field: 'View', headerName: 'View', width: 140 },
          {
            field: 'action', headerName: 'Action', width: 250, sortable: false,
            renderCell: (cellValues) => {
              return (
                <div >
                  <Button
                    className='prbuton'
                    variant="contained"
                    color='primary'>
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color='primary'>
                    Delete
                  </Button>
                </div>
              )
            }
          }
        ];

        const rows = [
          //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        ];

        export default function DataTable() {
          return (
            <div className='adduser' style={{ height: '51vh', width: '160vh', margin: '0px' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                rowsPerPageOptions={[5]}
                onRowAdd />
            </div>
          );
        }

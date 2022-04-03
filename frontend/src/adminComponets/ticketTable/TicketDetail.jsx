
import React from 'react'
import './ticketdetail.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const TicketDetail = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Customer Name', width: 150 },
    { field: 'from', headerName: 'Source City', width: 150 },
    { field: 'to', headerName: 'Destination City', width: 150 },
    {
      field: 'date',
      headerName: 'Ticket Date',
      width: 130,
    },
    {
      field: 'busname',
      headerName: 'Bus Name',
      width: 130,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell:(params)=>{
        return(
          <>
            <Link to='/ticketing/ticketdetail'> <Button variant="primary mx-2" className="userTableViewBtn"><img src='/icon/view.png' className='btnicon'/></Button></Link>
              <Button variant="warning"><img src='/icon/cancel.png' className='btnicon'/></Button>
              <Button variant="primary mx-2"><img src='/icon/done.png' className='btnicon'/></Button>
          </>
        )
      }
    },
    
  ];
  
  const rows = [
    { 
    id: 1, 
    name: 'sonydeol', 
    from: 'pokhara', 
    to: 'kathmandu', 
    date:'jun 2 2021',
    busname:'mahakali delux'
  },
    
  ];
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default TicketDetail
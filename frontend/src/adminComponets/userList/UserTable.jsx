import React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import './Userlist.css'
import {Button} from 'react-bootstrap'
import {userRows} from '../../adminComponets/dymmyData/DummyData'

const UserTable = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
        field: "transaction",
        headerName: "Transaction",
        width: 160,
      },
      {
        field: "action",
        headerName: "Action",
        width: 160,
        renderCell: (params)=>{
            return(
                <>
                <Button variant="primary" className="userTableViewBtn">View</Button>,
                <Button variant="danger">Delete</Button> 
                </>
            )
        }
      },
    
  ];

  return (
    <div style={{ height: 500, width: "98%" }}>
      <DataGrid
      disableSelectionOnClick
        rows={userRows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserTable;

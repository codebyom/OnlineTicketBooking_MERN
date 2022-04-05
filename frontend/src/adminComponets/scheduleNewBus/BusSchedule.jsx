import React,{useState} from 'react'
import './busschedule.css'
import { Button, Container, Modal, Form } from "react-bootstrap";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
const BusSchedule = () => {
    const [show, setShow] = useState(false);
    const saveHandle = () => {
      setShow(false);
    };
    const addbtnHandle = () => {
      setShow(true);
    };
  
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "buscompany", headerName: "Bus Company", width: 130 },
      { field: "bustype", headerName: "Bus type", width: 110 },
      { field: "busno", headerName: "Bus No", width: 100 },
      { field: "routeno", headerName: "Route No", width: 100 },
      { field: "date", headerName: "Date", width: 100 },
      { field: "time", headerName: "Time", width: 80 },
      {
        field: "seatcapacity",
        headerName: "Seat Capacity",
        width: 80,
      },
      {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params)=>{
            return(
                <>
                <Button variant="primary"><img src='/icon/view.png' className='btnicon'/></Button>,
                <Button variant="secondary"><img src='/icon/edit.png' className='btnicon'/></Button>,
                <Button variant="danger"><img src='/icon/delete.png' className='btnicon'/></Button>,
                </>
            )
        }
      },
    ];
  
    const rows = [
      {
        id: 1,
        buscompany: "mahakalai yatayat",
        bustype: "supre a/c",
        busno: "ma2kha 2288",
        routeno: "route122",
        date: "jan 2 2022",
        time:"3:00 pm",
        seatcapacity:40,
      },
    ];
  return (
    <>
        <div className="main_div">
        <div className="addnew">
          <Button
            variant="primary"
            className="addroutebtn"
            onClick={addbtnHandle}
          >
            Add Route
          </Button>
        </div>

        <div style={{ height: 400, width: "100%" }} className="table_div">
          <DataGrid
          disableSelectionOnClick
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>

        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>Add New Bus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Bus No:</Form.Label>
                <Form.Control type="text" placeholder="Enter Bus number" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Route</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Route (Eg: route123)"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bus Company</Form.Label>
                <Form.Control type="text" placeholder="Enter Bus Company" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bus Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Bus Type" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Seat Capacity</Form.Label>
                <Form.Control type="text" placeholder="Enter Seat Capacity" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={saveHandle}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default BusSchedule
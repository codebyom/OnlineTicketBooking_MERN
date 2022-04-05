import React,{useState} from "react";
import "./routesDetail.css";
import { Button,Container,Modal,Form } from "react-bootstrap";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const RouteDetail = () => {

const [show,setShow] = useState(false)

const saveHandle = ()=>{
    setShow(false)
}
const addbtnHandle = ()=>{
    setShow(true)
}

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "routeno", headerName: "Route No", width: 130 },
    { field: "from", headerName: "From", width: 130 },
    { field: "to", headerName: "To", width: 130 },
    {
      field: "distance",
      headerName: "Distance",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width:200,
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
      routeno: "m1c",
      from: "kathmandu",
      to: "dhangadi",
      distance: "1200km",
    },
  ];

  return (
    <>
      <div className="main_div">
        <div className="addnew">
          <Button variant="primary" className="addroutebtn" onClick={addbtnHandle}>
            Add Route
          </Button>
        </div>

        <div style={{ height: 400, width: "80%" }} className="table_div">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>

        <Modal show={show}>
            <Modal.Header>
                <Modal.Title>Add New Route</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Route No</Form.Label>
                        <Form.Control type="text" placeholder="Enter Route no"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control type="text" placeholder="From (Eg: Kathmandu)"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>To</Form.Label>
                        <Form.Control type="text" placeholder="To (Eg: Pokhara)"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Distance</Form.Label>
                        <Form.Control type="text" placeholder="Distance (Eg.200km)"/>
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={saveHandle} >Save</Button>
            </Modal.Footer>
        </Modal>


      </div>
      
    </>
  );
};

export default RouteDetail;

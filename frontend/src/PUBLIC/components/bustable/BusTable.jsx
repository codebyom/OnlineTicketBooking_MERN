import React from "react";
import "./bustable.css";
import {Table,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const BusTable = () => {
  return (
    <>
      <div className="bustable">
        <Table striped bordered hover>
          <thead>
            <tr className="th_table">
              <th>Travles</th>
              <th>Bus Type</th>
              <th>Departure|Shift</th>
              <th>Available</th>
              <th>Fare</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td>Mahakali Yatayat</td>
              <td>A/C Delux</td>
              <td>3:30 pm (both)</td>
              <td>22 Sat</td>
              <td>Rs.2200.0/-</td>
              <td>
                  <Button variant="primary">Book Now</Button>
              </td>
            </tr>
            <tr>
              <td>pabandot Yatayat</td>
              <td>Super A/C Delux</td>
              <td>7:00 am (both)</td>
              <td>12 Sat</td>
              <td>Rs.2600.0/-</td>
              <td>
                  <Button variant="primary">Book Now</Button>
              </td>
            </tr>
            <tr>
              <td>makalu Yatayat</td>
              <td>Normal Hiace</td>
              <td>5:00 pm (day)</td>
              <td>18 Sat</td>
              <td>Rs.2200.0/-</td>
              <td>
                  <Button variant="primary">Book Now</Button>
              </td>
            </tr>
        
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BusTable;

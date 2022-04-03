
import React from 'react'
import './Viewticket.css'
import {Col,Row,Container,Button} from 'react-bootstrap'
const Viewticket = () => {
  return (
    <>
        <div className="Container">
        <h2 className='title'>Ticket Detail</h2>
          <div className="ticketContent">
             <Row>
              <Col sm={11} md={6} lg={6}>
                <ul className="ticketdetail">
                  <li className="ticketno">
                  <span>Ticket No :</span>m22f23c
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Customer Name :</span>soni demo
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Address :</span>Kathmandu,Nepal
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Contact No :</span>9812775909
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Arrival Station :</span>kalanki
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>From :</span>kathmandu
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>To :</span>mahendranager
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Seat :</span>3
                  </li>
                </ul>

              </Col>
              <Col sm={11} md={6} lg={6}>
              <ul className="ticketdetail">
                  <li className="ticketDetailItem">
                  <span className='span'>Date :</span>12 jun 2022
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Time :</span>3:00 pm
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Bus Company :</span>Mahakalai yatayat
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Bus No :</span>ma 2 kha 1233
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Bus Type :</span>Super A/c
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Ticket Price :</span>Npr2200
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Seat No:</span>B11,B12,B13
                  </li>
                  <li className="ticketDetailItem">
                  <span className='span'>Status :</span>Booked
                  </li>
                </ul>

              </Col>

              
          </Row>
          </div>
          <div className="footer">
          <p>Please Contact us if you have any problem</p>
          <p>Landline : 099697549</p>
          <p>Mobile: 9842465480</p>
          <p>Bus Staff No: 9812775908</p>
          </div>
          <Button variant="primary mx-3">Download Ticket</Button>
          <Button variant="success">Print</Button>
        </div>
    </>
  )
}

export default Viewticket
import React from "react";
import "./buslist.css";
import Header from "../headers/Header";
import { Container, Row, Col, Button, Form,FormGroup,ButtonGroup } from "react-bootstrap";
import TextField from "@mui/material/TextField";
import BusTable from "../bustable/BusTable";
const BusList = () => {
  return (
    <>
      <Header />
      <div className="main_div_bus_list">
        <form>
          <div className="title_bar_search">
            <div className="form-text">
              <TextField
                id="outlined-basic"
                label="Enter Source City(Eg:Kathmandu)"
                variant="outlined"
                className="text"
              />
            </div>
            <div className="form-text">
              <TextField
                id="outlined-basic"
                label="Enter Source City(Eg:Kathmandu)"
                variant="outlined"
                className="text"
              />
            </div>

            <div className="form_date">
              <input type="date" id="date_search" />
            </div>
            <div className="search_btn">
              <Button variant="primary" className="search_btn">
                Search
              </Button>
            </div>
          </div>
        </form>

        {/* search result section start */}
        <div className="search_dashbord">
          <Row>
            <Col sm={12} md={4} lg={3} xl={3}>
              <div className="side_filter">
                <h3 className="filter_title">Travel</h3>
                <form>
                  <ul className="ul_item">
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label="Nepal Tour and Travel pvt.ltd"
                        />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Pavandut yatayat" />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label="Mahakalai yatayat pvt.ltd"
                        />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label="Bhaktapur Tour and Trvel pvt.ltd"
                        />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label="Makalu Yatayat pvt.ltd"
                        />
                      </Form.Group>
                    </li>
                  </ul>

                  {/* bus type start */}

                  <h3 className="filter_title">Bus Type</h3>
                  <ul className="ul_item">
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="A/c Delux" />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Super A/c Delux" />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Normal Hiace" />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Tourist Bus" />
                      </Form.Group>
                    </li>
                    <li>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="VIP" />
                      </Form.Group>
                    </li>
                  </ul>
                </form>
              </div>
            </Col>

            {/* right side main section */}

            <Col sm={12} md={8} lg={9} xl={9}>
              <div className="main_search_table">
                <div className="title_bar_table">
                  <h3 className="busstatus_title">
                    Pokhara:
                    <span className="status_span">
                      20 Seat Avaliable in 3 Buses
                    </span>
                  </h3>
                  <h3 className="dusdate_title">
                    Date: <span className="busdate_title_span">2 jun 2022</span>
                  </h3>
                  <div className="form_group">
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Previous</Button>
                    <Button variant="secondary">Next</Button>
                  </ButtonGroup>
                  </div>
                </div>

                <BusTable/>


              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export default BusList;

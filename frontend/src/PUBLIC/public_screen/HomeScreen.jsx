import React from "react";
import "./HomeScreen.css";
import { Row, Col, Container } from "react-bootstrap";
import {Link} from 'react-router-dom'
import SearchForm from "../components/searchForm/SearchForm";
const HomeScreen = () => {
  return (
    <>
      <div className="main_div">
        <div className="content">
          <Container>
            <Row>
              <Col sm={12} md={11} lg={8} xl={8}>
                <div className="leftsideContent">
                  <div className="banner-content">
                    <h3 className="focous-title">No More Running Late</h3>
                    <h3 className="sub-content">
                      To Bus Station Due to{" "}
                      <span className="bold-span">Traffic!</span>{" "}
                    </h3>
                    <div className="btn">
                      <Link to="/signup">
                        <button className="signup">SignUp➟</button>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </Col>
              <Col sm={12} md={12} lg={4} xl={4}>
                

                <SearchForm/>

              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;

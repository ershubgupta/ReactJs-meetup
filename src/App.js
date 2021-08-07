import { Col, Container, Row } from "react-bootstrap";
import {Switch, Route} from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';

import './App.scss'

function App() {
  return (
    <div className="meetup">
        <Header/>
        <Container className="min-vh-100">
          <Row>
            <Col xs={12} className="my-4">
              <Switch>
                < Route exact path = "/"
                component = {
                  RegistrationForm
                }
                />
                <Route path = "/dashboard"
                component = {
                  Dashboard
                }
                />                
                <Route path = "/reports"
                component = {
                  Reports
                }
                />
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer/>
    </div>
  );
}

export default App;

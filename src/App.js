//import the dependencies module
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import CreateMachine from './components/create-machine'
import EditMachine from './components/edit-machine'
import ListMachine from './components/list-machine'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/create-machine'} className="nav-link">
                  Smart Factory
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-machine'} className="nav-link">
                    Create machine
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/list-machine'} className="nav-link">
                    List Machine
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateMachine {...props} />}
                  />
                  <Route
                    exact
                    path="/create-machine"
                    component={(props) => <CreateMachine {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-machine/:id"
                    component={(props) => <EditMachine {...props} />}
                  />
                  <Route
                    exact
                    path="/list-machine"
                    component={(props) => <ListMachine {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}

export default App
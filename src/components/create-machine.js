// import the dependencies module
import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

// create a CreateMachine class
export default class CreateMachine extends Component {
  constructor(props) {
    super(props);

    // Setting up the functions
    this.onChangeMachineName = this.onChangeMachineName.bind(this);
    this.onChangeMachineType = this.onChangeMachineType.bind(this);
    this.onChangeMachineStatus = this.onChangeMachineStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up the state
    this.state = {
      name: "",
      type: "",
      status: "",
    };
  }

  // onChangeMachineName function update the current value present in the name field to store it in name state
  onChangeMachineName(e) {
    this.setState({ name: e.target.value });
  }

  // onChangeMachineType function update the current value present in the type field to store it in type state
  onChangeMachineType(e) {
    this.setState({ type: e.target.value });
  }

  // onChangeMachineStatus function update the current value present in the status field to store it in status state
  onChangeMachineStatus(e) {
    this.setState({ status: e.target.value });
  }

  // onSubmit function collect all field values and send it to sever
  onSubmit(e) {
    e.preventDefault();

    // collect all field values and combined into one object
    const machineObject = {
      name: this.state.name,
      type: this.state.type,
      status: this.state.status,
    };

    // send the form data to server
    axios.post("http://localhost:4000/machines/add-machine", machineObject).then((res) => {
      alert("Machine details successfully added!");
    });
    // After added the data successfully into database the again reinitialized
    this.setState({ name: "", type: "", status: "" });
  } // end of onSubmit function

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Machine Name*</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeMachineName} required />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Machine Type*</Form.Label>
            {/* <Form.Control type="email" value={this.state.type} onChange={this.onChangeMachineType} /> */}
            <Form.Select id="selectList" onChange={this.onChangeMachineType} value={this.state.type} required>
              <option value="">Select</option>
              <option value="Manual">Manual</option>
              <option value="Automated">Automated</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Machine Status*</Form.Label>
            <Form.Control type="text" value={this.state.status} onChange={this.onChangeMachineStatus} required />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
            Add machine
          </Button>
        </Form>
      </div>
    );
  }
} // end of the createMachine class

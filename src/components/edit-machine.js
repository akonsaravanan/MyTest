// import the dependencies module
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// create a EditMachine class
export default class EditMachine extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeMachineName = this.onChangeMachineName.bind(this);
    this.onChangeMachineType = this.onChangeMachineType.bind(this);
    this.onChangeMachineStatus = this.onChangeMachineStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      type: '',
      status: ''
    }
  }

  // After all the elements of the page is rendered correctly, componentDidMount method is called
  // This method fetch the data from External Api
  componentDidMount() {

    // collect the particular data based on the id
    axios.get('http://localhost:4000/machines/edit-machine/' + this.props.match.params.id)
      .then(res => {
        // response value is set into state
        this.setState({
          name: res.data.name,
          type: res.data.type,
          status: res.data.status
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  // onChangeMachineName function update the current value present in the name field to store it in name state
  onChangeMachineName(e) {
    this.setState({ name: e.target.value })
  }

  // onChangeMachineType function update the current value present in the type field to store it in type state
  onChangeMachineType(e) {
    this.setState({ type: e.target.value })
  }

  // onChangeMachineStatus function update the current value present in the status field to store it in status state
  onChangeMachineStatus(e) {
    this.setState({ status: e.target.value })
  }

  // onSubmit function collect all field values and send it to sever
  onSubmit(e) {
    e.preventDefault()

    // collect all field values and combined into one object
    const machineObject = {
      name: this.state.name,
      type: this.state.type,
      status: this.state.status
    };

    // send the update data to server with id
    axios.put('http://localhost:4000/machines/update-machine/' + this.props.match.params.id, machineObject)
      .then((res) => {
        alert("Machine successfully updated!");
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Machine List 
    this.props.history.push('/list-machine')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Machine Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeMachineName} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Machine Type</Form.Label>
          <Form.Control type="text" value={this.state.type} onChange={this.onChangeMachineType} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Machine status</Form.Label>
          <Form.Control type="text" value={this.state.status} onChange={this.onChangeMachineStatus} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Machine
        </Button>
      </Form>
    </div>);
  }
}

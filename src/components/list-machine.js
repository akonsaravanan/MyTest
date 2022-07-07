// import the dependencies module
import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

// create a ListMachine class
export default class ListMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [],
    };

    // Setting up functions
    this.deleteMachine = this.deleteMachine.bind(this);
  }

  // After all the elements of the page is rendered correctly, componentDidMount method is called
  // This method fetch the data from External Api
  componentDidMount() {
    axios
      .get("http://localhost:4000/machines/")
      .then((res) => {
        this.setState({
          machines: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteMachine(id) {

    // Send a request with corresponding id
    axios.delete(
        "http://localhost:4000/machines/delete-machine/" + id
      )
      .then((res) => {
        alert("Machine successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // Datatable method display all value the present in the database using table format
  DataTable() {
    return this.state.machines.map((res, i) => {
      return (
        <tr key={res._id}>
          <td>{res.name}</td>
          <td>{res.type}</td>
          <td>{res.status}</td>
          <td>
            <Link className="edit-link" to={"/edit-machine/" + res._id}>
              Edit
            </Link>
            <Button onClick={() =>this.deleteMachine(res._id)} size="sm" variant="danger">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Machine Name</th>
              <th>machine Type</th>
              <th>Machine Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}

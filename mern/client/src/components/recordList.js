import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
const Record = (props) => (

  <tr>
    <td>{props.record.flight_from}</td>
    <td>{props.record.flight_to}</td>
    <td>{props.record.flightNum}</td>
    <td>{props.record.flight_date}</td>
    <td>{props.record.cabin}</td>
    <td>{props.record.noSeats}</td>
    <td>{props.record.depTime}</td>
    <td>{props.record.arrTime}</td>
    <td>{props.record.terminal}</td>
    <td>
      <Link to={"/edit/" + props.record._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);


//CLASS RECORD LIST 
export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/record")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:3000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          key={currentrecord._id}
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3> </h3>
        <h3> </h3>
        <h3> Flight List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>FROM</th>
              <th>TO</th>
              <th>FLIGHT NO.</th>
              <th>DATE</th>
              <th>CABIN</th>
              <th>AVAILABLE SEATS</th>
              <th>DEPARTURE TIME</th>
              <th>ARRIVAL</th>
              <th>TERMINAL</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
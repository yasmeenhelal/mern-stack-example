import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
//import {useHistory} from 'react-router';



// const express = require("express");
// const app = express();



export default class Create extends Component {
  // This is the constructor that stores the data.

  
  constructor(props) {
    super(props);
    this.onChangeFlightFrom = this.onChangeFlightFrom.bind(this);
    this.onChangeFlightTo = this.onChangeFlightTo.bind(this);
    this.onChangeFlightNo = this.onChangeFlightNo.bind(this);
    this.onChangeFlightDate = this.onChangeFlightDate.bind(this);
    this.onChangeFlightCabin = this.onChangeFlightCabin.bind(this);
    this.onChangeFlightSeats = this.onChangeFlightSeats.bind(this);
    this.onChangeFlightDep = this.onChangeFlightDep.bind(this);
    this.onChangeFlightArr = this.onChangeFlightArr.bind(this);
    this.onChangeFlightTer = this.onChangeFlightTer.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
   
    this.state = {
      flight_from: "",
      flight_to: "",
      flightNum: "",
      flight_date: "",
      cabin: "",
      noSeats: "",
      depTime: "",
      arrTime: "",
      terminal: "",
    };
  }

  // These methods will update the state properties.
  onChangeFlightFrom(e) {
    this.setState({
      flight_from: e.target.value,
    });
  }

  onChangeFlightTo(e) {
    this.setState({
      flight_to: e.target.value,
    });
  }

  onChangeFlightNo(e) {
    this.setState({
      flightNum: e.target.value,
    });
  }

  onChangeFlightDate(e) {
    this.setState({
      flight_date: e.target.value,
    });
  }

  onChangeFlightCabin(e) {
    this.setState({
      cabin: e.target.value,
    });
  }

  onChangeFlightSeats(e) {
    this.setState({
      noSeats: e.target.value,
    });
  }

  onChangeFlightDep(e) {
    this.setState({
      depTime: e.target.value,
    });
  }

  onChangeFlightArr(e) {
    this.setState({
      arrTime: e.target.value,
    });
  }

  onChangeFlightTer(e) {
    this.setState({
      terminal: e.target.value,
    });
  }

// This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record to the database.
    const newFlight = {
      flight_from: this.state.flight_from,
      flight_to: this.state.flight_to,
      flightNum: this.state.flightNum,
      flight_date: this.state.flight_date,
      cabin: this.state.cabin,
      noSeats: this.state.noSeats,
      depTime: this.state.depTime,
      arrTime: this.state.arrTime,
      terminal: this.state.terminal,
    };

    axios
      .post("http://localhost:3000/record", newFlight)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState( {
      flight_from: "",
      flight_to: "",
      flightNum: "",
      flight_date: "",
      cabin: "",
      noSeats: "",
      depTime: "",
      arrTime: "",
      terminal: "",
    }) ;
  }
       
  // app.get("/newUsers", (req, res)=>{
  //   const user = new User({
  //     Name: "lobna elnahas",
  //     Email: "lobnaelnahas10@gmail.com",
  //     Age: "21",
  //     BornIn:"Egypt",
  //     LivesIn: "Germany",
  //     MartialStatus: "Single",
  //     PhoneNumber: "201061460865",
  //     Job: "Student"
  //   })
  //   user.save()
  //   res.send(user);
  // }




  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Add New Flight</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Flight From: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.flight_from}
              onChange={this.onChangeFlightFrom}
            />
          </div>
          <div className="form-group">
            <label>Flight To: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.flight_to}
              onChange={this.onChangeFlightTo}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="First"
                checked={this.state.cabin === "First"}
                onChange={this.onChangeFlightCabin}
              />
              <label className="form-check-label">First</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Business"
                checked={this.state.cabin === "Business"}
                onChange={this.onChangeFlightCabin}
              />
              <label className="form-check-label">Business</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Economy"
                checked={this.state.cabin === "Economy"}
                onChange={this.onChangeFlightCabin}
              />
              <label className="form-check-label">Economy</label>
            </div>
          </div>
          <div className="form-group">
            <label>Number of Seats Available: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.noSeats}
              onChange={this.onChangeFlightSeats}
            />
          </div>         
          <div className="form-group">
            <label>Flight Date: </label>
            <input
              type="date" 
              value="2021-06-01"
              className="form-control"
              value={this.state.flight_date}
              onChange={this.onChangeFlightDate}
            />
          </div>
          <div className="form-group">
            <label>Flight Number: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.flightNum}
              onChange={this.onChangeFlightNo}
            />
          </div>
          <div className="form-group">
            <label>Flight Departure Time: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.depTime}
              onChange={this.onChangeFlightDep}
            />
          </div>
          <div className="form-group">
            <label>Flight Departure Arrival: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.arrTime}
              onChange={this.onChangeFlightArr}
            />
          </div>
          <div className="form-group">
            <label>Airport Departure Terminal: </label>
            <input
              type="text" 
              className="form-control"
              value={this.state.terminal}
              onChange={this.onChangeFlightTer}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Flight"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }

  // var f1 = [
//     {From:"LAX",
//     To:"JFK",
//     FlightDate:"12-1-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"20"},

//     {From:"LAX",
//     To:"JFK",
//     FlightDate:'12-1-2022',
//     Cabin:"Business",
//     SeatsAvailable:"10"},

//     {From:"LAX",
//     To:"JFK",
//     FlightDate:'12-1-2022',
//     Cabin:"First",
//     SeatsAvailable:"6"},
    
//     {From:"JFK",
//     To:"LAX",
//     FlightDate:"22-1-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"30"},

//     {From:"JFK",
//     To:"LAX",
//     FlightDate:'22-1-2022',
//     Cabin:"Business",
//     SeatsAvailable:"15"},

//     {From:"JFK",
//     To:"LAX",
//     FlightDate:'22-1-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"JFK",
//     To:"LHR",
//     FlightDate:"21-2-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"22"},

//     {From:"JFK",
//     To:"LHR",
//     FlightDate:'21-2-2022',
//     Cabin:"Business",
//     SeatsAvailable:"2"},

//     {From:"JFK",
//     To:"LHR",
//     FlightDate:'21-2-2022',
//     Cabin:"First",
//     SeatsAvailable:"5"},

//     {From:"LHR",
//     To:"JFK",
//     FlightDate:"6-3-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43"},

//     {From:"LHR",
//     To:"JFK",
//     FlightDate:'6-3-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26"},

//     {From:"LHR",
//     To:"JFK",
//     FlightDate:'6-3-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"CAI",
//     To:"DXB",
//     FlightDate:"10-4-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"50"},

//     {From:"CAI",
//     To:"DXB",
//     FlightDate:'10-4-2022',
//     Cabin:"Business",
//     SeatsAvailable:"22"},

//     {From:"CAI",
//     To:"DXB",
//     FlightDate:'10-4-2022',
//     Cabin:"First",
//     SeatsAvailable:"10"},

//     {From:"DXB",
//     To:"CAI",
//     FlightDate:"18-4-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"50"},

//     {From:"DXB",
//     To:"CAI",
//     FlightDate:'18-4-2022',
//     Cabin:"Business",
//     SeatsAvailable:"22"},

//     {From:"DXB",
//     To:"CAI",
//     FlightDate:'18-4-2022',
//     Cabin:"First",
//     SeatsAvailable:"10"},

//     {From:"CDG",
//     To:"MUC",
//     FlightDate:"25-4-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43"},

//     {From:"CDG",
//     To:"MUC",
//     FlightDate:'25-4-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26"},

//     {From:"CDG",
//     To:"MUC",
//     FlightDate:'25-4-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"MUC",
//     To:"CDG",
//     FlightDate:"2-5-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43"},

//     {From:"MUC",
//     To:"CDG",
//     FlightDate:'2-5-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26"},

//     {From:"MUC",
//     To:"CDG",
//     FlightDate:'2-5-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"LHR",
//     To:"CDG",
//     FlightDate:"6-5-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"30"},

//     {From:"LHR",
//     To:"CDG",
//     FlightDate:'6-5-2022',
//     Cabin:"Business",
//     SeatsAvailable:"13"},

//     {From:"LHR",
//     To:"CDG",
//     FlightDate:'6-5-2022',
//     Cabin:"First",
//     SeatsAvailable:"3"},

//     {From:"CDG",
//     To:"LHR",
//     FlightDate:"17-5-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"60"},

//     {From:"CDG",
//     To:"LHR",
//     FlightDate:'17-5-2022',
//     Cabin:"Business",
//     SeatsAvailable:"16"},

//     {From:"CDG",
//     To:"LHR",
//     FlightDate:'17-5-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"CAI",
//     To:"RUH",
//     FlightDate:"6-6-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43"},

//     {From:"CAI",
//     To:"RUH",
//     FlightDate:'6-6-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26"},

//     {From:"CAI",
//     To:"RUH",
//     FlightDate:'6-6-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"RUH",
//     To:"CAI",
//     FlightDate:"16-6-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"22"},

//     {From:"RUH",
//     To:"CAI",
//     FlightDate:'16-6-2022',
//     Cabin:"Business",
//     SeatsAvailable:"10"},

//     {From:"RUH",
//     To:"CAI",
//     FlightDate:'16-6-2022',
//     Cabin:"First",
//     SeatsAvailable:"6"},

//     {From:"YYZ",
//     To:"FRA",
//     FlightDate:"7-7-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43"},

//     {From:"YYZ",
//     To:"FRA",
//     FlightDate:'7-7-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26"},

//     {From:"YYZ",
//     To:"FRA",
//     FlightDate:'7-7-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"},

//     {From:"FRA",
//     To:"YYZ",
//     FlightDate:"8-8-2022",
//     Cabin:"Economy",
//     SeatsAvailable:"43"},

//     {From:"FRA",
//     To:"YYZ",
//     FlightDate:'8-8-2022',
//     Cabin:"Business",
//     SeatsAvailable:"26"},

//     {From:"FRA",
//     To:"YYZ",
//     FlightDate:'8-8-2022',
//     Cabin:"First",
//     SeatsAvailable:"16"}
//     ];
    
//     flight.collection.insert(f1,function(err,docs){
//         if(err){
//             return console.error(err);
//         }
//         else{
//           console.log("Multiple documents inserted")
//         }
//     })

}

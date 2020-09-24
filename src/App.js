import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./Person";
import axios from "axios";
import { BranchSummary4, MyComponent } from "./BranchSummary";

class App extends React.Component {
  debugger;
  me = new Person("Baptiste", "Vannesson");
  you = new Person("David", "Choi");

  constructor(props) {
    alert("Construct");
    super(props);
    this.state = [{
      field1: "Default 1",
      field2: "Default 2",
        }];
    this.aapi.get('/').then(res => {console.log(res.data)})
  }

    update = (name, e) => {this.setState({ [name]: e.target.value });};
    aapi = axios.create({baseURL: 'http://172.20.10.6:8081/allprice/'});
  render() {
    return (
      <form>
        <p> field1 :
          <input
            type="text"
            value={this.state.field1}
            onChange={(e) => this.update("field1", e)}
          />
          {this.state.field1}
        </p>
        <p> field2 :
          <input
            type="text"
            value={this.me.firstName}
            onChange={(e) => this.update("field2", e)}
          />
          {this.state.field1}
        </p>
        <table>
          <tr>
            <MyComponent
              this
              is
              how
              pass
              parameter
              to
              MyComponent
              arg={this.state}
            />
            <BranchSummary4></BranchSummary4>
          </tr>
        </table>
      </form>
    );
  }
}
export default App;

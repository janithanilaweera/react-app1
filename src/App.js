import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from './Person';
import { BranchSummary4, MyComponent } from "./BranchSummary";

class App extends React.Component {
  me  = new Person('Baptiste', 'Vannesson');
  you = new Person('David', 'Choi');
  constructor(props) {
    alert("Construct");
    super(props);
    this.state = {
      field1: "Default 1",
      field2: "Default 2",
    };
  }

  update = (name, e) => {
    this.setState({ [name]: e.target.value });
  };

  render() {
    return (
      <form>
        <p>
          <input
            type="text"
            value={this.state.field1}
            onChange={(e) => this.update("field1", e)}
          />
          {this.state.field1}
        </p>
        <p>
          <input
            type="text"
            value={this.me.lastName}
            onChange={(e) => this.update("field2", e)}
          />
          {this.state.field2}
        </p>
        <table>
          <tr>
            <MyComponent></MyComponent>
            <BranchSummary4></BranchSummary4>
          </tr>
        </table>
      </form>
    );
  }
}
export default App;

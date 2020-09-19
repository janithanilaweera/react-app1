import React from "react";
import logo from "./logo.svg";
import "./App.css";
import BranchSummary from "./BranchSummary";

class App extends React.Component {
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
            value={this.state.field2}
            onChange={(e) => this.update("field2", e)}
          />
          {this.state.field2}
        </p>
        <table>
          <tr>
            <BranchSummary></BranchSummary>
          </tr>
        </table>
      </form>
    );
  }
}
export default App;

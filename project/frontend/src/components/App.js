import React, { Component } from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
      loaded: false
    };
  }

  componentDidMount() {
    axios
      .get("api/lead/")
      .then(response => {
        this.setState({ data: response.data, loaded: true });
      })
      .catch(() => console.log("Axios: Something went wrong"));
  }

  render() {
    const { data, loaded } = this.state;
    return loaded ? (
      <div className="column">
        <h1 className="title">Howdy!</h1>
        <Table data={data} />
      </div>
    ) : null;
  }
}

export default App;

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />, wrapper) : null;

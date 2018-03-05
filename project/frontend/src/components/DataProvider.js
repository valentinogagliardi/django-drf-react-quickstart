import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };

  state = {
    data: [],
    loaded: false,
    placeholder: "Loading..."
  };

  componentDidMount() {
    axios
      .get(this.props.endpoint)
      .then(response => {
        this.setState({ data: response.data, loaded: true });
      })
      .catch(() => this.setState({ placeholder: "Something went wrong" }));
  }

  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}

export default DataProvider;

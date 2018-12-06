import React, { Component } from "react";

import { Container, Form } from "./styles";

export default class HeaderVerticalMenu extends Component {
  state = {
    loading: false,
    repositoryError: false,
    repositoryInput: "",
    repositories: []
  };

  handleChange = event => {
    var inputValue = event.target.value;
    this.props.RepositoryInput(inputValue);

    this.setState({ repositoryInput: inputValue });
  };

  render() {
    return (
      <Container>
        <Form
          withError={this.state.repositoryError}
          onSubmit={this.props.handleSubmit}
        >
          <input
            type="text"
            placeholder="Usuário/Repositório"
            value={this.state.repositoryInput}
            onChange={e => this.handleChange(e)}
          />

          <button type="submit">
            {this.state.loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <i className="fa fas fa-plus-circle" />
            )}
          </button>
        </Form>
      </Container>
    );
  }
}

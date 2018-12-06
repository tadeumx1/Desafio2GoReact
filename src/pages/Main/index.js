import React, { Component } from "react";

import logo from "../../assets/logo.png";

import api from "../../services/api";

import moment from "moment";

import { Container, Form, VerticalMenu } from "./styles";

import HeaderVerticalMenu from "../../components/HeaderVerticalMenu";
import RepositoryCard from "../../components/RepositoryCard";
import Issues from "../../components/Issues";

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      repositoryError: false,
      repositoryInput: "",
      repositorySelected: null,
      repositories: []
    };
  }

  handleRepositoryInput = value => {
    this.setState({ repositoryInput: value });
  };

  handleRepository = repository => {
    // console.log('Repositório selecionado ' + repository.name + " " + repository)
    this.setState({ repositorySelected: repository });

    console.dir(this.state.repositorySelected);
  };

  handleAddRepository = async e => {
    // No comportamento padrão do HTML quando o OnSubmit do
    // formulário é executado ele recarrega a página pois ele
    // está tentando enviar as informações desse formulário para outra página
    // para desabilitar esse funcionamento podemos usar o e.preventDefault()

    e.preventDefault();

    this.setState({ loading: true });

    console.log(this.state.repositoryInput);

    try {
      const { data: repository } = await api.get(
        `repos/${this.state.repositoryInput}`
      );
      // const response = await api.get(`repos/${this.state.repositoryInput}`);


      // Errado
      // repositories: this.state.repositories.push()

      console.log("FOIIII " + repository.lastCommit);

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, repository],
        repositoryError: false
      });
    } catch (err) {
      console.log(err);

      this.setState({ repositoryError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <Container>
        <VerticalMenu>
          <HeaderVerticalMenu
            handleSubmit={this.handleAddRepository}
            RepositoryInput={this.handleRepositoryInput}
          />

          {this.state.repositories.map(repository => (
            <button onClick={() => this.handleRepository(repository)}>
              <RepositoryCard repository={repository} />
            </button>
          ))}
        </VerticalMenu>

        {this.state.repositorySelected && (
          <Issues repository={this.state.repositorySelected} />
        )}
      </Container>
    );
  }
}

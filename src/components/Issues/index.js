import React, { Component } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";

import { Container, IssuesList, Loading } from "./styles";

export default class Issues extends Component {
  availableFilters = [
    { value: "all", label: "Todas" },
    { value: "open", label: "Abertas" },
    { value: "closed", label: "Fechadas" }
  ];

  state = {
    activeFilter: "all",
    loading: false,
    issues: []
  };

  componentDidMount() {
    this.loadIssues();
  }

  // Atualiza lista de issues se usuário alterar repositório
  componentDidUpdate(props) {
    const { repository } = this.props;

    if (props.repository.id !== repository.id) {
      this.loadIssues();
    }
  }

  loadIssues = async () => {
    this.setState({ loading: true });

    const { repository } = this.props;
    const { activeFilter } = this.state;

    const response = await api.get(`repos/${repository.full_name}/issues`, {
      params: { state: activeFilter }
    });

    this.setState({ issues: response.data, loading: false });
  };

  handleFilterChange = e => {
    this.setState({ activeFilter: e.target.value }, this.loadIssues);
  };

  render() {
    const { activeFilter, issues, loading } = this.state;
    const { repository } = this.props;

    return (
      <Container>
        <header>
          <div>
            <img src={repository.owner.avatar_url} alt={repository.full_name} />
            <div>
              <strong>{repository.name}</strong>
              <span>{repository.owner.login}</span>
            </div>
          </div>
          <select value={activeFilter} onChange={this.handleFilterChange}>
            {this.availableFilters.map(filter => (
              <option key={filter.value} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </header>

        {loading ? (
          <Loading>
            <i className="fa fa-spinner fa-pulse" />
          </Loading>
        ) : (
          <IssuesList>
            {issues.map(issue => (
              <li>
                <img src={issue.user.avatar_url} alt={issue.user.login} />
                <div>
                  <strong>{issue.title}</strong>
                  <span>{issue.user.login}</span>
                  <a href={issue.html_url}>
                    <i className="fa fa-external-link" />
                    Abrir issue
                  </a>
                </div>
              </li>
            ))}
          </IssuesList>
        )}
      </Container>
    );
  }
}

Issues.PropTypes = {
  repository: PropTypes.shape({
    owner: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string
    }),
    name: PropTypes.string,
    full_name: PropTypes.string
  }).isRequired
};

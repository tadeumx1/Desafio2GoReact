import React from "react";
import PropTypes from "prop-types";

import { Container, Repository } from "./styles";

// const repositories = props.repositories;

const RepositoryCard = ({ repository }) => {
  return (
    <Container>
      <Repository key={repository.id}>
        <img src={repository.owner.avatar_url} alt={repository.owner.login} />
        <header>
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>
      </Repository>
      <i className="fa fas fa-angle-right fa-2x" />
    </Container>
  );
};

RepositoryCard.PropTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string
      })
    })
  ).isRequired
};

export default RepositoryCard;

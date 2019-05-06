import React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reposActions, commitsActions } from "../actions/";
import RepoCard from "../components/RepoCard";

const Wrapper = styled.div`
  align-self: flex-start;
  margin: 16px 0;
  width: 100%;
`;

class RepoList extends React.PureComponent {
  handleOnClick = data => {
    const { history, org, getCommits } = this.props;
    const path = `repo/${data.name}`;
    history.push(path);
    getCommits(org, data.name);
  };

  componentDidMount() {
    const { org, getRepos } = this.props;
    getRepos(org);
  }

  render() {
    const { repos, info } = this.props;
    if (repos.length === 0 || !Array.isArray(repos) || !info) {
      return <Typography variant="title">Loading</Typography>;
    }
    return (
      <>
        <Wrapper>
          <Typography variant="h5" gutterBottom>
            Repositories
          </Typography>
          <Typography variant="caption" gutterBottom>
            Public repositories: {info.public_repos}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Grid container spacing={24} alignItems="stretch">
            {repos.map(repo => (
              <Grid key={repo.id} item xs={12} sm={6} md={4}>
                <RepoCard info={repo} handleOnClick={this.handleOnClick} />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getRepos: reposActions,
      getCommits: commitsActions
    },
    dispatch
  );
};

const mapStateToProps = ({ reposReducer, orgInfoReducer }) => {
  const { org, repos } = reposReducer;
  const { info } = orgInfoReducer;

  return {
    org,
    repos,
    info
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);

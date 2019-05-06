import React from "react";
import styled from "styled-components";
import { Grid, Typography, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reposActions, commitsActions, orgInfoActions } from "../actions/";
import RepoCard from "../components/RepoCard";
import Header from "../components/Header";

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
    const { org, getRepos, getInfo } = this.props;
    getInfo(org);
    getRepos(org);
  }

  render() {
    const { repos, info } = this.props;
    if (repos.length === 0 || !info) {
      return <Typography variant="title">Loading</Typography>;
    }
    return (
      <>
        <Wrapper>
          <Header {...info} />
        </Wrapper>
        <Wrapper>
          <Divider />
        </Wrapper>
        <Wrapper>
          <Typography variant="h5" gutterbottom>
            Repositories
          </Typography>
          <Typography variant="caption" gutterbottom>
            Public repositories: {info.public_repos}
          </Typography>
        </Wrapper>
        <Wrapper>
          <Grid container spacing={24} alignItems="stretch">
            {repos.map(repo => (
              <Grid item xs={12} sm={6} md={4}>
                <RepoCard
                  key={repo.id}
                  info={repo}
                  handleOnClick={this.handleOnClick}
                />
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
      getCommits: commitsActions,
      getInfo: orgInfoActions
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

import * as Actions from "../constants";

function requestRepos() {
  return {
    type: Actions.REQUEST_REPOS
  };
}

function receiveRepos(json) {
  return {
    type: Actions.RECEIVE_REPOS,
    repos: json
  };
}

function receiveReposErr(error) {
  return {
    type: Actions.RECEIVE_REPOS_ERROR,
    error
  };
}

function fetchRepos(org) {
  return dispatch => {
    dispatch(requestRepos());
    return fetch(
      `https://api.github.com/orgs/${org}/repos?type=all&sort=updated&per_page=100`
    )
      .then(res => res.json())
      .then(json => dispatch(receiveRepos(json)))
      .catch(err => dispatch(receiveReposErr(err)));
  };
}

export default fetchRepos;

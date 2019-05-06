import * as Actions from "../constants";

function requestCommits() {
  return {
    type: Actions.REQUEST_REPO_COMMITS
  };
}

function receiveCommits(json, name) {
  return {
    type: Actions.RECEIVE_REPO_COMMITS,
    commits: json,
    repo: name
  };
}

function receiveCommitsError(error) {
  return {
    type: Actions.RECEIVE_REPO_COMMITS_ERROR,
    error
  };
}

function fetchCommits(org, repo) {
  return dispatch => {
    dispatch(requestCommits());
    return fetch(
      `https://api.github.com/repos/${org}/${repo}/commits?per_page=100`
    )
      .then(res => res.json())
      .then(json => dispatch(receiveCommits(json, repo)))
      .catch(err => dispatch(receiveCommitsError(err)));
  };
}

export default fetchCommits;

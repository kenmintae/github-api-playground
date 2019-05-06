import * as Actions from "../constants";

function commitsReducer(
  state = {
    repo: null,
    commits: [],
    isFetching: false
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_REPO_COMMITS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case Actions.RECEIVE_REPO_COMMITS:
      return Object.assign({}, state, {
        isFetching: false,
        repo: action.repo,
        commits: action.commits
      });
    case Actions.RECEIVE_REPO_COMMITS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        commits: action.error
      });
    default:
      return state;
  }
}

export default commitsReducer;

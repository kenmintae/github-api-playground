import * as Actions from "../constants";

function reposReducer(
  state = {
    org: "NetFlix",
    isFetching: false,
    repos: []
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case Actions.RECEIVE_REPOS:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.repos
      });
    case Actions.RECEIVE_REPOS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.error
      });
    default:
      return state;
  }
}

export default reposReducer;

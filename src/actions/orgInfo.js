import * as Actions from "../constants";

function requestInfo() {
  return {
    type: Actions.REQUEST_INFO
  };
}

function receiveInfo(json) {
  return {
    type: Actions.RECEIVE_INFO,
    info: json
  };
}

function receiveInfoError(error) {
  return {
    type: Actions.RECEIVE_INFO_ERROR,
    error
  };
}

function fetchOrgInfo(name) {
  return dispatch => {
    dispatch(requestInfo());
    return fetch(`https://api.github.com/orgs/${name}`)
      .then(res => res.json())
      .then(json => dispatch(receiveInfo(json)))
      .catch(err => dispatch(receiveInfoError(err)));
  };
}

export default fetchOrgInfo;

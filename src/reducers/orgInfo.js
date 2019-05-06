import * as Actions from "../constants";

function orgInfoReducer(
  state = {
    isFetching: false,
    info: null
  },
  action
) {
  switch (action.type) {
    case Actions.REQUEST_INFO:
      return Object.assign({}, state, {
        isFetching: true
      });
    case Actions.RECEIVE_INFO:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info
      });
    case Actions.RECEIVE_INFO_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        info: action.info
      });
    default:
      return state;
  }
}

export default orgInfoReducer;

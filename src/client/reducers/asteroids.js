import {
  REQUEST_DATA,
  RECEIVE_DATA,
  RECEIVE_DATA_ERROR,
} from "../actions/getAsteroids";

const initialState = {
  network: {
    status: null,
    error: false,
    isFetching: false,
    lastFetched: new Date(),
    msg: null,
    lastAction: "",
    isLogged: false,
  },
  data: {},
};

export const asteroids = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_DATA:
    return Object.assign({}, state, {
      network: Object.assign({}, state.network, {
        isFetching: true,
        error: false,
        msg: null,
        lastAction: action.action,
      }),
    });
  case RECEIVE_DATA:
    return Object.assign({}, state, {
      data: Object.assign({}, state.data, action.data),
      network: Object.assign({}, state.network, {
        status: action.status,
        error: false,
        isFetching: false,
        lastFetched: new Date(),
      }),
    });
  case RECEIVE_DATA_ERROR:
    return Object.assign({}, state, {
      network: Object.assign({}, state.network, {
        status: action.status,
        error: true,
        isFetching: false,
        msg: action.msg,
      }),
    });
  default:
    return state;
  }
};

import { INITIALIZE_SESSION } from "../actions/initializeSession";

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
  data: [],
};

export const initializeSession = (state = initialState, action) => {
  switch (action.type) {
  case INITIALIZE_SESSION:
    return Object.assign({}, state, {
      network: Object.assign({}, state.network, {
        isFetching: false,
        error: false,
        msg: "logged",
        lastAction: action.action,
        isLogged: true,
      }),
    });
  default:
    return state;
  }
};

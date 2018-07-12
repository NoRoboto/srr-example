import { getAsteroids } from "../api/api";

const REQUEST_DATA = "REQUEST_DATA";
const RECEIVE_DATA = "RECEIVE_DATA";
const RECEIVE_DATA_ERROR = "RECEIVE_DATA_ERROR";

export {
  REQUEST_DATA,
  RECEIVE_DATA,
  RECEIVE_DATA_ERROR,
};

const networkActions = {
  fetch: "fetch",
};

export const requestData = (action) => ({
  action, type: REQUEST_DATA,
});

export const receiveData = (data, status) => ({
  data, type: RECEIVE_DATA, status,
});

export const receiveDataError = (msg, status) => ({
  type: RECEIVE_DATA_ERROR, msg, status,
});

export const getAsteroidsData = (params) => dispatch => {
  dispatch(requestData(networkActions.fetch));
  getAsteroids(params, (err, res) => {
    if (err) {
      dispatch(receiveDataError(res.body.message, res.status));
      console.error("error fetching asteroids", err);
    } else {
      dispatch(receiveData(res.body, res.status));
    }
  });
};

import { combineReducers } from "redux";
import { initializeSession } from "../reducers/initializeSession";
import { asteroids } from "../reducers/asteroids";

export const rootReducer = combineReducers({
  loggedIn: initializeSession,
  data: asteroids,
});

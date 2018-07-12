import superagent from "superagent";
import { baseUrl } from "./conf";

export const getAsteroids = (parameters, cb) => {
  superagent
    .get(`${ baseUrl }${ parameters }&api_key=DEMO_KEY`)
    .accept("json")
    .end(cb);
};

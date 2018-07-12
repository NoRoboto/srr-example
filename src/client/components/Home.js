import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";

import { getAsteroidsData } from "../actions/getAsteroids";

class Home extends React.Component {
  static formatData(obj) {
    const elements = [];
    for (const key of Object.keys(obj)) {
      const jsx = obj[ key ].map(asteroid => (
        <tr key={ asteroid[ "neo_reference_id" ] }>
          <td>{asteroid[ "name" ]}</td>
          <td>{asteroid[ "neo_reference_id" ]}</td>
          <td>{asteroid[ "is_potentially_hazardous_asteroid" ] ? "Yes" : "No" }</td>
          <td>{key}</td>
        </tr>
      ));
      elements.push(jsx);
    }
    return elements;
  }
  constructor() {
    super();
    this.startDate = moment().format("YYYY-MM-DD");
    this.endDate = moment().add(3, "days").format("YYYY-MM-DD");
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const defaultParams = `start_date=${ this.startDate }&end_date${ this.endDate }`;
    dispatch(getAsteroidsData(defaultParams));
  }

  render() {
    const { asteroids } = this.props;
    const nearEarthObj = asteroids.data[ "near_earth_objects" ];
    const elementCount = asteroids.data[ "element_count" ];
    return (
      <React.Fragment>
        { elementCount ? (
          <React.Fragment>
            <h1>Home</h1>
            <h3>{`Start date ${ this.startDate } | End date ${ this.endDate }`}</h3>
            <h3>Total asteroids: { elementCount }</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>id</th>
                  <th>Hazardous</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {this.constructor.formatData(nearEarthObj)}
              </tbody>
            </table>
          </React.Fragment>) : <h1>Is loading initial fetch</h1> }
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  asteroids: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({
  asteroids: state.data,
});

export default connect(mapStateToProps)(Home);

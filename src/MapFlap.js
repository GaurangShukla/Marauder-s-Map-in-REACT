import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class MapFlap extends PureComponent {
  render() {
    const { number } = this.props;
    const cls = `map-flap flap---${number}`;
    return (
      <div className={cls}>
        <div className="map-flap__front" />
        <div className="map-flap__back" />
      </div>
    );
  }
}

MapFlap.propTypes = {
  number: PropTypes.number.isRequired
};

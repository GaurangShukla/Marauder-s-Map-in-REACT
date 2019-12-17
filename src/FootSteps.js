import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class FootSteps extends PureComponent {
  render() {
    const { name } = this.props;
    const { number } = this.props;
    const cls = `footsteps footsteps-${number}`;
    return (
      <div className={cls}>
        <div className="footstep left" />
        <div className="footstep right" />
        <div className="scroll-name">
          <p>{name}</p>
        </div>
      </div>
    );
  }
}

FootSteps.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired
};

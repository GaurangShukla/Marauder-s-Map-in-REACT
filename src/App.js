import React from "react";
import FootSteps from "./FootSteps";
import MapFlap from "./MapFlap";
import MapSide from "./MapSide";

import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  toggleMap = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };
  render() {
    return (
      <div className="App">
        <div className="main-content" onClick={this.toggleMap}>
          <div className={this.state.active ? "map-base active" : "map-base"}>
            <FootSteps name="Gaurang Shukla" number={1} />
            <FootSteps name="Rewa Garg" number={2} />
            <MapFlap number={1} />
            <MapFlap number={2} />
            <MapSide side={1} map={8} isback={true} />
            <MapSide side={2} map={18} isback={true} />
            <MapSide side={3} map={7} isback={true} />
            <MapSide side={4} map={10} isback={false} />
            <MapSide side={4} map={10} isback={false} />
            <MapSide side={5} map={6} isback={true} />
            <MapSide side={6} map={11} isback={true} />
          </div>
        </div>
      </div>
    );
  }
}

import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>

        <button className="btnSubstract" onClick={this.props.substract}>
          -
        </button>

        <button className="btnAdd" onClick={this.props.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;

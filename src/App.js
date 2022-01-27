import React from "react";
import data from "../src/users.json";
import UserInfo from "./components/UserInfo.js";
import Counter from "./components/Counter.js";
import "./styles/global.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>

        {/* Counter */}
        <Counter
          count={this.state.count}
          substract={() => {
            if (this.state.count > 0) {
              this.setState((prevState) => {
                return {
                  count: prevState.count - 1,
                };
              });
            }
          }}
          // substract={() => {
          //   if (this.state.count > 0) {
          //     this.setState({ count: this.state.count - 1 });
          //   }
          // }}
          increment={() => {
            this.setState((prevState) => {
              return {
                count: prevState.count + 1,
              };
            });
          }}
        />
        {/* increment={() => {
        this.setState({ count: this.state.count + 1 });
         }} */}

        {/* User's info */}
        {data
          .map((user) => (
            <UserInfo
              name={user.name}
              email={user.email}
              website={user.website}
            />
          ))
          .slice(0, this.state.count)}

        {/* {data
          .map((user) => (
            <UserInfo
              name={user.name}
              email={user.email}
              website={user.website}
            />
          ))
          .slice(0, this.state.count)} */}
      </div>
    );
  }
}

export default App;

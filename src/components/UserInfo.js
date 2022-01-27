import React from "react";

class UserInfo extends React.Component {
  render() {
    return (
      <div>
        <h2>User</h2>
        <p>Name : {this.props.name}</p>
        <p>Email : {this.props.email}</p>
        <p>Website : {this.props.website}</p>
      </div>
    );
  }
}

export default UserInfo;

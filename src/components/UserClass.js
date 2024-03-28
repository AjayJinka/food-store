import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>test@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;

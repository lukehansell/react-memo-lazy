import React, { lazy, Suspense, Component, Fragment } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const Counter = lazy(() => import("./Counter.js"));

class App extends Component {
  state = {
    name: "Guest",
    counter: 0
  };

  changeName = () => {
    this.setState({
      name: "Barry"
    });
  };

  incrementCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    const { name, counter } = this.state;
    return (
      <Fragment>
        <Hello name={name} onClick={this.changeName} />
        <Suspense fallback={<div>loading...</div>}>
          <Counter onClick={this.incrementCounter} count={counter} />
        </Suspense>
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

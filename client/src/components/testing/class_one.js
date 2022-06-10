import { Component } from "react";

class ClassOne extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      console.log("GetDerivedStateFromProps");
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    console.log("-----------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("ShouldComponentUpdate | DO NOT RENDER");
      return false;
    }
    console.log("ShouldComponentUpdate | RENDER");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Get Snapshot Before Update");
    return null;
  }

  render() {
    console.log("Render");
    return (
      <div>
        <div className="flex flex-col items-center gap-3 mt-4 w-40">
          <div className="text-2xl">Counter : {this.state.counter}</div>
          <button className="btn btn-outline" onClick={this.increment}>
            increment
          </button>
          <button className="btn btn-outline" onClick={this.decrement}>
            decrement
          </button>
        </div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ComponentDidUpdate");
    console.log("-----------------");
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
    console.log("-----------------");
  }

  componentDidCatch(error, info) {
    console.log("ComponentDidCatch");
    console.log("-----------------");
  }
}

export default ClassOne;

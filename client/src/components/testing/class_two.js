import { Component } from "react";
import ClassOne from "./class_one";

class ClassTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });

    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGenerator = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }
  render() {
    return (
      <div>
        <div className="flex gap-3 mt-3">
          <button
            className="btn btn-outline"
            onClick={this.mountCounter}
            disabled={this.state.mount}
          >
            mount
          </button>
          <button
            className="btn btn-outline"
            onClick={this.unmountCounter}
            disabled={!this.state.mount}
          >
            unmount
          </button>
          <button className="btn btn-outline" onClick={this.ignoreProp}>
            ignoreProp
          </button>
          <button className="btn btn-outline" onClick={this.seedGenerator}>
            Generate Seed
          </button>
        </div>
        {this.state.mount ? (
          <ClassOne ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

export default ClassTwo;

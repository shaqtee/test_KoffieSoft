import React, { Component } from "react";

export class Classcom extends Component {
  constructor(props) {
    super(props);
    console.log(props); //constructor(props) super()
    console.log(this.props); //constructor(props) super(props)
    //    this.state = {
    //      classc: "this classcom",
    //      test: `${props.name} state test`,
    //    };
    //  }
    //  aku = () => {
    //    return 1 + 1;
    this.watch = "watch";
  }

  render() {
    //console.log(this.props); // direct from component declare <Classcom name="adisakti" /> its ok without constructor "this.props"
    //console.log(this.aku());
    return (
      <div>
        <h1>Classcom</h1>
        {/*<p>{this.state.classc}</p>
        <p>{this.state.test}</p>
        <p>{this.props.name}</p>*/}
        <p>{this.watch}</p>
      </div>
    );
  }
}

// children
export class Coba extends Classcom {
  constructor(satu, dua, props) {
    super();
    this.state = {
      name: "coba",
      tiga: props,
    };
    this.satu = satu;
    this.dua = dua;
  }

  render() {
    console.log(this.state.tiga);
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

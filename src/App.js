import React from "react";
import MojKomponent2 from "./mojkomponent2.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <MojKomponent />

        <hr />

        <h2>I love React!</h2>
        <h2>I great technology!</h2>
        <MojKomponent2 />
        <hr />

        <h3>Hello Wiktor!</h3>
        <h3>Hello Robert!</h3>
        <h3>Hello Magda!</h3>
        <h3>Hello Joanna!</h3>

        <hr />

        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
class MojKomponent extends React.Component {
  render() {
    return <p>to jest mój komponent !!!!</p>;
  }
}

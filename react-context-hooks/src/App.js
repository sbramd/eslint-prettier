import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Callback from "./hooks/components/Callback";
import Memo from "./hooks/components/Memo";

const Hero = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Introducing Hooks</h1>
    </header>
  </div>
);

const Wrapper = ({ title, component: Component }) => (
  <section className="wrapper">
    <article className="wrapper-content">
      <header className="wrapper-header">
        <h1>{title}</h1>
      </header>
      {Component}
    </article>
  </section>
);

function App() {
  const sections = [
    { title: "Callback", component: <Callback /> },
    { title: "Memo", component: <Memo /> },
  ];

  return (
    <main>
      <Hero />
      {/* <Wrapper title="Hooks">
        <p>
          React has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started.
        </p>
      </Wrapper> */}
      {sections.map(({ title, component }, index) => (
        <Wrapper key={index} title={title} component={component} />
      ))}
    </main>
  );
}

export default App;

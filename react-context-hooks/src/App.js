import React from "react";
import logo from "./logo.svg";
import "./App.css";

import State from "./hooks/State";
import Callback from "./hooks/Callback";
import Memo from "./hooks/Memo";
import Reducer from "./hooks/reducer";
import Context from "./hooks/context";
import Effect from "./hooks/effect";
import Ref from "./hooks/Ref";
import LayoutEffect from "./hooks/LayoutEffect";

const Hero = () => (
  <div className="hero">
    <header className="hero-header">
      <img src={logo} className="hero-header-logo" alt="Logo" />
      <h1>Introducing Hooks</h1>
    </header>
  </div>
);

const SideNav = ({ data, title }) => (
  <nav className="side-nav-wrapper">
    <div className="side-nav">
      <header className="side-nav-header">
        <h4>{title}</h4>
      </header>
      <ul className="side-nav-link-list">
        {data.map(({ title, id }, index) => (
          <li key={index} className="side-nav-link">
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

const Wrapper = ({ id, title, component: Component }) => (
  <section id={id} className="content-wrapper">
    <article className="content">
      <header className="content-header">
        <h1>{title}</h1>
      </header>
      {Component}
    </article>
  </section>
);

function App() {
  const sectionData = [
    { id: "state", title: "State", component: <State /> },
    { id: "effect", title: "Effect", component: <Effect /> },
    { id: "ref", title: "Ref", component: <Ref /> },
    {
      id: "layout-effect",
      title: "Layout Effect",
      component: <LayoutEffect />,
    },
    { id: "callback", title: "Callback", component: <Callback /> },
    { id: "memo", title: "Memo", component: <Memo /> },
    { id: "reducer", title: "Reducer", component: <Reducer /> },
    { id: "context", title: "Context", component: <Context /> },
  ];

  return (
    <main>
      <SideNav data={sectionData} title="Introducing Hooks" />
      <div className="container">
        <Hero />
        {sectionData.map((section, index) => (
          <Wrapper key={index} {...section} />
        ))}
      </div>
    </main>
  );
}

export default App;

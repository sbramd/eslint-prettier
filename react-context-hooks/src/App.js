import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Callback from "./hooks/components/Callback";
import Memo from "./hooks/components/Memo";

const Hero = () => (
  <div className="hero">
    <header className="hero-header">
      <img src={logo} className="hero-header-logo" alt="Logo" />
      <h1>Introducing Hooks</h1>
    </header>
  </div>
);

const SideNav = ({ links, title }) => (
  <nav className="side-nav-wrapper">
    <div className="side-nav">
      <header className="side-nav-header">
        <h4>{title}</h4>
      </header>
      <ul className="side-nav-link-list">
        {links.map(({ name, id }, index) => (
          <li key={index} className="side-nav-link">
            <a href={`#${id}`}>{name}</a>
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
  const sections = [
    { id: "callback", title: "Callback", component: <Callback /> },
    { id: "memo", title: "Memo", component: <Memo /> },
  ];
  const links = [
    { id: "callback", name: "Callback" },
    { id: "memo", name: "Memo" },
  ];

  return (
    <main>
      <SideNav links={links} title="Introducing Hooks" />
      <div className="container">
        <Hero />
        {sections.map((section, index) => (
          <Wrapper key={index} {...section} />
        ))}
      </div>
    </main>
  );
}

export default App;

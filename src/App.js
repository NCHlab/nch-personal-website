import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/views/header.js";
import Home from "./components/views/home.js";
import About from "./components/views/about.js";
import Projects from "./components/views/projects.js";
import Api from "./components/views/api.js";
import Background from "./components/utils/background.js";

const sections = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "projects" },
  { name: "About / CV", url: "about" },
  // { title: "Contact", url: "contact" },
  { name: "API", url: "api" }
];

function App() {
  return (
    <Router>
      <div>
        <Header title="NCHlab" sections={sections} />
        <Background>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/api">
              <Api />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Background>
      </div>
    </Router>
  );
}

export default App;

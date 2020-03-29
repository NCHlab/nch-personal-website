import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Home, About, Projects, Api, Footer } from "./components/views";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Background from "./components/utils/background.js";

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
      <div className="">
        <Header title="NCHlab" sections={sections} />
        <CssBaseline />

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/api">
            <Api />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

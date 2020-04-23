import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";
import TacoPage from "./components/TacoPage";
import AboutPage from "./components/AboutPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/taco">
            <TacoPage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

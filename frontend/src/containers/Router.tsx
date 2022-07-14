import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from "./Container";
import Home from "./Home";
import BasicTabs from "../components/BasicTabs";

export class Router extends React.Component<any, any>
{
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Home />}/>*/}
          <Route path="/" element={<BasicTabs />}/>
        </Routes>
      </BrowserRouter>

    );
  }
}

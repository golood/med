import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Container from "./Container";

export class Router extends React.Component<any, any>
{
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
          </Route>
        </Routes>
      </BrowserRouter>

    );
  }
}

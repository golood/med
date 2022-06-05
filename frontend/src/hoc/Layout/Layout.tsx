import React, {Component} from "react";
import classes from './Layout.module.css'

class Layout extends Component<any, any> {
  render() {
    return (
      <div className={classes.Layout + " variables"}>
        <main style={{ minWidth: "100%", minHeight: "100vh", maxHeight: "100vh" }}>
          { this.props.children }
        </main>
      </div>
    )
  }
}

export default Layout

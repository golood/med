import { Provider } from 'mobx-react';
import React from 'react';
import {Router} from "./containers/Router";
import Layout from "./hoc/Layout/Layout";
import Store from "./store/Store";

class App extends React.Component<any, any>
{
  private readonly mainStore: Store

  constructor(props: any) {
    super(props);
    this.mainStore = new Store()
  }

  render() {
    return (
      <Layout>
        <Provider mainStore={this.mainStore}>
          <Router />
        </Provider>
      </Layout>
    );
  }
}

export default App;

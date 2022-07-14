import React from "react";
import classes from "./Container.module.css";
import {inject, observer, IWrappedComponent} from "mobx-react"
import {Button} from "@mui/material";
import Store from "../store/Store";

interface Props {
}

interface InjectedProps extends Props {
  mainStore: Store
}

@inject("mainStore")
@observer
class Home extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  get injected() {
    return this.props as InjectedProps
  }

  render() {
    const {mainStore} = this.injected

    return (
      <div className={classes.Sorting}>
        <form  action="/api/loadFile" method="post" encType="multipart/form-data">
          <input
            type="file"
            name="file"
          />
          <div>{mainStore.fileName}</div>
          <Button type="submit">Загрузить</Button>
        </form>
      </div>
    );
  }
}

export default Home as typeof Home & IWrappedComponent<Props>

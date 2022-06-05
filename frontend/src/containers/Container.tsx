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
class Container extends React.Component<Props, any> {
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
        <Button
          variant="contained"
          component="label"
        >
          Выбрать файл
          <input
            type="file"
            hidden
            onChange={(event) => {
              const value: string| undefined = event.target.files?.item(0)?.name
              console.log(value);
              mainStore.setFileName(value ? value : '');
            }}
          />
        </Button>
        <div>{mainStore.fileName}</div>
      </div>
    );
  }
}

export default Container as typeof Container & IWrappedComponent<Props>

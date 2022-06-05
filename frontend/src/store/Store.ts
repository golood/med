import {action, makeObservable, observable} from "mobx";


export default class Store {
  @observable
  fileName: string;

  constructor() {
    makeObservable(this)
    this.fileName = ''
  }

  @action.bound async setFileName(fileName: string) {
    this.fileName = fileName
  }
}

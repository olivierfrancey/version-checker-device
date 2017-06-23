import { Injectable } from '@angular/core';


@Injectable()
export class DataService {

  data:any;

  setData(data) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

}

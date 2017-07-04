import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class SessionService {

  constructor(
    private http: HttpService,
    private storage: Storage) { }

  setCookie(name, value) {
    return this.storage.set(name, value).catch((err) => console.log(err));
  }
  
  getCookie(name) {
    return this.storage.get(name).then((val) => {
      console.log(name, ' is ', val);
    });
  }
}

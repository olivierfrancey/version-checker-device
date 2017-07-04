import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  private url_api:string = 'https://version-checker-server-olivierfrancey.c9users.io';

  constructor(private http: Http) {}

  // createAuthorizationHeader(headers: Headers) {
  //   headers.append('Authorization', 'Basic ' +
  //     btoa('username:password'));
  // }

  get(request) {
    // let headers = new Headers();
    let url = `${this.url_api}/${request}`;
    // this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      // headers: headers
    }).toPromise();
  }

  post(request, data) {
    // let headers = new Headers();
    let url = `${this.url_api}/${request}`;
    // this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      // headers: headers
    }).toPromise();
  }
}

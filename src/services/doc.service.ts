import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DocService {


  constructor(private http: Http) { }

  getDoc(id:string): Promise<any> {
    const url_api = 'https://version-checker-server-olivierfrancey.c9users.io/checker';
    const url = `${url_api}/${id}.json`;

    console.log('url: '+url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().doc)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

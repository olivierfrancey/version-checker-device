import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';

@Injectable()
export class DocService {


  constructor(private http: HttpService) { }

  getDoc(id:string): Promise<any> {

    return this.http.get('checker/'+id+'.json')
      .then(response => response.json().doc)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}

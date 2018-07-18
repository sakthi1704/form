import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

// import { Post } from './post';


@Injectable({
  providedIn: 'root'
})
export class AppFormService {

  constructor(private http:Http) {
  }


  getData (): Observable<any> {
    return this.http.get('http://172.25.10.158:3000/user')
        .map(this.extractData)
        .catch(this.handleError);
}
// addBookWithObservable(post:Post): Observable<Post> {
//     let headers = new Headers({ 'Content-Type': 'application/json' });
//     let options = new RequestOptions({ headers: headers });
//     return this.http.post('http://172.25.10.158:3000/users/', post, options)
//                .map(this.extractData)
//                .catch(this.handleError);
// }

  private extractData(res:Response) {
      let body = res.json();
      return body || [];

  }

  private handleError(error:any) {
      let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      return Observable.throw(errMsg);
  }
}

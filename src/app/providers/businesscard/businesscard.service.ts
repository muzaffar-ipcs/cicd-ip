import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinesscardService {

  constructor(private http: HttpClient) { }

  getBusinesscardDetails = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/businesscard/allbusinesscard';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

  getBusinesscardDetailsByID = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/businesscard/getBusinesscardWithId';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  };

}

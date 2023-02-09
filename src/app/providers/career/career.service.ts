import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  constructor(private http: HttpClient) { }

  getCareerDetails = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/career/careerview';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getCareerWithId = (moreData:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/career/careerdetail';   
    return this.http
      .post(endpoint, moreData, { observe: 'response' as 'body' })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  };
  
}

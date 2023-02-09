import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient) { }

  getTestimonialData = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/home/viewtestimonial';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };


  getAlltestimonial = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/home/alltestimonial';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getMatchDetails = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/match/frontview';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    );
  }; 

}

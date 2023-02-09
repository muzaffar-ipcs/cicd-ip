import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
  
  getblogDetails = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/viewblog';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getAllblog = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/allblog';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };
  
  getblogWithId = (moreData:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/blogdetail';   
    return this.http
      .post(endpoint, moreData, { observe: 'response' as 'body' })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  };

  getNextblogWithId = (moreData:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/nextblogdetail';   
    return this.http
      .post(endpoint, moreData, { observe: 'response' as 'body' })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  };

  getBlogWithString = (moreData:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/searchblog';   
    return this.http
      .post(endpoint, moreData, { observe: 'response' as 'body' })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  };

  getAllvideoBlog = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/allvideoblog';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getTagDetails = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/viewtag';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  getDownloadLink = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/home/download';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };

  addInvites = (data:any): Observable<any> => {
    const endpoint = environment.backendUrl+'/api/blog/addinvite';
    return this.http.post(endpoint, data).pipe(
      catchError((err) => {
        return throwError(err);
      })
    ); 
  };
 
}

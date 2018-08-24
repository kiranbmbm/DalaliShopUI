import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { APIURL } from '../constants'
import { Observable, throwError } from 'rxjs';
import { Owner } from '../owners/IOwners'
import { catchError, retry, tap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient, private router: Router
  ) { }


  GetAllOwners(): Observable<HttpResponse<Owner>> {
    debugger;
    // return this.http.get<Owner>(APIURL + "/Owners/GetAllOwners");
    return this.http.get<Owner>(APIURL + "/Owners/GetAllOwners", { observe: 'response' }).pipe(
      retry(3),
      catchError(this.handleError)
    )



  }

  PostOwner() {
    // return this.http.post<any>(APIURL + "/Owners/PostOwner")
  }


  // error handiling 
  private handleError(error: HttpErrorResponse) {

    // if (error.status === 401) {
    //   this.router.navigate(['NoAccess']);
    // }
    // else if (error.status === 404) {
    //   this.router.navigate(['FileNotFound'])
    // }
    // else {
    //   this.router.navigate(['Error'])
    // }
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }  
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  //downloading the file txt file here in the service it reads the file and in the component it download  
  getTextFile(filename: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(filename, { responseType: 'text' })
      .pipe(
        tap( // Log the result or error
          data => console.log(filename, data),
          error => console.log(filename, error)
        )
      );
  }
}

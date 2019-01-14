import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { APIURL } from '../constants'
import { Observable, throwError } from 'rxjs';
import { Owner } from '../owners/IOwners'
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Options } from 'selenium-webdriver/chrome';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private router: Router,
    private http: HttpClient
  ) {

  }

// ----------------get realted things -----------------------
  GetAllOwners(): Observable<HttpResponse<Owner>> {
    // return this.http.get<Owner>(APIURL + "/Owners/GetAllOwners");
    return this.http.get<Owner>(APIURL + "/Owners/GetAllOwners", { observe: 'response' }).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  //gets the Data irrespective of the object depending on the passed URL 

  GetAnyThing(URI: string): Observable<HttpResponse<any>> {
    // return this.http.get<Owner>(APIURL + "/Owners/GetAllOwners");
    return this.http.get<any>(APIURL + URI, { observe: 'response' }).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  // ----------------get realted things -----------------------

  //------post related things---------------
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  
  PostOwner(owner: any): Observable<HttpResponse<Owner>> {
    return this.http.post<any>(APIURL + "/Owners/PostOwner", owner, this.httpOptions)
      .pipe(
        tap( // Log the result or error
          options => console.log(options),
        ),
              catchError(this.handleError)
      );
  }


  //------post related things--------------- 







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

//downloading the file txt file here in the service it reads the file and in the component it download  

// deleting the Data in the DB by the ID 

DeleteOwner (id){
  debugger;
  return this.http.delete(APIURL+ "/Owners/DeleteOwner" + "/?Id=" + id ,this.httpOptions)
  .pipe(
    tap( // Log the result or error
      data => console.log(data),
    ),
    catchError(this.handleError)
  );
}


  // error handiling 
  private handleError(error: HttpErrorResponse) {
    //  navigate by URL pending 
    // if (error.status === 401) {
    //   // this.router.navigate(['NoAccess']);
    //     this.router.navigateByUrl("http://localhost:4200/NoAccess");
    // }
    // else if (error.status === 404) {
    //   // this.router.navigate(['FileNotFound'])
    //   this.router.navigateByUrl("/FileNotFound");

    // }
    // else {
    //   // this.router.navigate(['Error'])
    //   this.router.navigateByUrl("http://localhost:4200/Error");

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
  // error handiling 
}

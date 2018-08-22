import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {APIURL } from '../constants'
import {Owner} from '../owners/IOwners'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  constructor(
    private http: HttpClient
  ) { }

 
  GetAllOwners(){
    return this.http.get<Owner>(APIURL + "/Owners/GetAllOwners");
  }
}

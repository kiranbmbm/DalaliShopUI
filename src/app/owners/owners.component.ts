import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services/services.service' ; 
import {Owner} from '../owners/IOwners' ; 


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  constructor(private servicesService : ServicesService) { 

  }
 
  Owners :  any ;  
  error : any ; 
  ngOnInit() {
 
  this.servicesService.GetAllOwners().subscribe((response) =>{
  //  sucess path 
    this.Owners= response.body["Table"]
    console.log(response) ,
    // error path 
    error => this.error = error // error path
    console.log(this.error) 
  } )
 

  }
  

}

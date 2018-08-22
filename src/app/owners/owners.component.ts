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
 
  Owners :  Owner ;  
  ngOnInit() {
 
  this.servicesService.GetAllOwners().subscribe((owners : Owner) =>{
    this.Owners= owners["Table"]
    console.log(owners['Table'])
  } )
 

  }
  

}

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Owner } from '../owners/IOwners';
import { ToastrService } from 'ngx-toastr';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbModule,NgbAlertModule,NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {

  constructor( private servicesService: ServicesService,
               private toastr: ToastrService,
                private modalService: NgbModule) {

  }

  Owners: any;
  error: any;

  owner = {

    FirstName: "Deepaksa",
    MiddleName: "Basavaraj",
    LastName: "Harakatti",
    CreatedBy: "",
    UpdatedBy: "",
    EmailAdress: "",
    MobileNumber: 123456789,
    PermanantAdress: "Sankadal",
    Place: "Blore",
    Taluq: "Naragunda",
    District: "Gadag",
    Pincode: 582116,
    FingerPrint: "" , 
    test: ""


  }


  ngOnInit() {
    // this.servicesService.GetAllOwners().subscribe((response) =>{
    //   // sucess path 
    //   this.Owners= response.body["Table"]
    //   console.log(response) ,
    //   // error path 
    //   error => this.error = error // error path
    // } )
    this.GetAllOwners();


  }

  // openLg(content) { 
  //    this.modalService.open(content, { size: 'lg' });
  // }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }



  GetAllOwners() {

    this.servicesService.GetAnyThing("/Owners/GetAllOwners").subscribe(
      (response) => {
        // sucess path 
        this.Owners = response.body["Table"]
        this.error = response.body["Table1"]
        // this.toastr.success("Success", 'Title');
        // this.toastr.info("Info");
        // this.toastr.warning("Warning");
        // this.toastr.error("Error");
        console.log(response)
        console.log(this.error),

          // error path 
         error => this.error = error // error path
      }
    )

  }


  PostOwner() {
    debugger;
    this.servicesService.PostOwner(this.owner).subscribe(
      //  owner => this.Owners.push(this.owner)
      owner =>{ this.GetAllOwners() ;
        this.toastr.success("Owner Added Successfully", 'Success');
      }
    )
  }

  DeleteOwner(id) {
    debugger;
    this.servicesService.DeleteOwner(id).subscribe(
      owner => {
        this.GetAllOwners() ;
        this.toastr.success("Owner Deleted Successfully", 'Deleted');
      }
    )
  }

}

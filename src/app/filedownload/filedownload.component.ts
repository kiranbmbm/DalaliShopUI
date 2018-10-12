import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services/services.service' ; 

@Component({
  selector: 'app-filedownload',
  templateUrl: './filedownload.component.html',
  styleUrls: ['./filedownload.component.css']
})
export class FiledownloadComponent implements OnInit {
debugger; 
  constructor(private servicesService :ServicesService ) { }
  contents : any ; 
  ngOnInit() {
  }
  download() {
    this.servicesService.getTextFile('assets/textfile.txt')
      .subscribe(results => this.contents = results);
  }
}

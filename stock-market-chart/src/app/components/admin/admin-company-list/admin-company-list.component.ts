import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  @Output() private createNewCompanyClicked = new EventEmitter()

  public companyList: any[] = []

  constructor() { }

  ngOnInit() {
    axios.get('http://localhost:7002/company/list')
      .then(
        (response : any) => {
          for(let json of response.data.companies){
            let tmpJson = {
              companyName: json.companyName,
              briefWriteup: json.briefWriteup,
              logo: atob(json.logo)
            }
            this.companyList.push(tmpJson)
          }
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  createNewCompany(){
    this.createNewCompanyClicked.emit(true)
  }

}

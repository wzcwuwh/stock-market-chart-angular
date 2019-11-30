import { Component, OnInit } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-user-company-list',
  templateUrl: './user-company-list.component.html',
  styleUrls: ['./user-company-list.component.css']
})
export class UserCompanyListComponent implements OnInit {

  public companyList: any[] = []

  constructor() { }

  ngOnInit() {
    axios.get('http://localhost:7002/company/list')
    .then((response:any)=>{
      this.companyList = response.data.companies
    })
    .catch(()=>{

    })
  }

}

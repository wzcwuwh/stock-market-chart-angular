import { Component, OnInit } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-company-list',
  templateUrl: './admin-company-list.component.html',
  styleUrls: ['./admin-company-list.component.css']
})
export class AdminCompanyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    axios.get('http://localhost:7002/company/list')
      .then(
        (response : any) => {
          console.log(response)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

}

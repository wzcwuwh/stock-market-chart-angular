import { Component, OnInit } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-user-ipo-list',
  templateUrl: './user-ipo-list.component.html',
  styleUrls: ['./user-ipo-list.component.css']
})
export class UserIpoListComponent implements OnInit {

  public ipoList: any[] = []

  constructor() { }

  ngOnInit() {
    axios.get('http://localhost:7002/company/IPOlist')
      .then(
        (response : any) => {
          this.ipoList = response.data.ipoList
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

}

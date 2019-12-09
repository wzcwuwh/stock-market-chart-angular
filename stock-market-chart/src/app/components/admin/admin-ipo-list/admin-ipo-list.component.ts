import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-ipo-list',
  templateUrl: './admin-ipo-list.component.html',
  styleUrls: ['./admin-ipo-list.component.css']
})
export class AdminIPOListComponent implements OnInit {

  @Output() private createNewIPOClicked = new EventEmitter()

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

  createNewIPO(){
    this.createNewIPOClicked.emit(true)
  }

}

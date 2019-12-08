import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-upload-summary',
  templateUrl: './admin-upload-summary.component.html',
  styleUrls: ['./admin-upload-summary.component.css']
})
export class AdminUploadSummaryComponent implements OnInit {

  public companyName: any

  public stockExchange: any

  public NoOfRecordsImported: any

  public fromDate: any

  public toDate: any

  public isOkClicked: boolean = false

  @Output() private okClicked = new EventEmitter()

  constructor() { }

  ngOnInit() {
    let companyCode = localStorage.getItem("companyCode")
    axios.post('http://localhost:7002/company/name',{
      companyCode: companyCode
    })
    .then((response)=>{
      this.companyName = response.data.companyName
    })
    .catch((error)=>{
      console.log(error)
    })
    this.stockExchange = localStorage.getItem("stockExchange")
    this.NoOfRecordsImported = localStorage.getItem("NoOfRecordsImported")
    this.fromDate = localStorage.getItem("fromDate")
    this.toDate = localStorage.getItem("toDate")
  }

  ok(){
    this.isOkClicked = true
    this.okClicked.emit(this.isOkClicked)
  }

}

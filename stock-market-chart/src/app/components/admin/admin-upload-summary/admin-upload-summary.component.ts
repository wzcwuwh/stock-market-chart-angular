import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-upload-summary',
  templateUrl: './admin-upload-summary.component.html',
  styleUrls: ['./admin-upload-summary.component.css']
})
export class AdminUploadSummaryComponent implements OnInit {

  public companyCode: any

  public stockExchange: any

  public NoOfRecordsImported: any

  public fromDate: any

  public toDate: any

  public isOkClicked: boolean = false

  @Output() private okClicked = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.companyCode = localStorage.getItem("companyCode")
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

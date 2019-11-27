import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-landing-page',
  templateUrl: './admin-landing-page.component.html',
  styleUrls: ['./admin-landing-page.component.css']
})
export class AdminLandingPageComponent implements OnInit {

  public importExcelShow: boolean = true

  public uploadSummaryShow: boolean = false

  public companyListShow: boolean = false

  constructor() { }

  ngOnInit() {
  }

  uploadClicked(e){
    if(e == true){
      this.importExcelShow = false
      this.uploadSummaryShow = true
    }
  }

  okClicked(e){
    if(e){
      this.importExcelShow = true
      this.uploadSummaryShow = false
    }
  }

  importDataClick(){
    this.importExcelShow = true
    this.uploadSummaryShow = false
    this.companyListShow = false
  }

  manageCompanyClick(){
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = true
  }

}

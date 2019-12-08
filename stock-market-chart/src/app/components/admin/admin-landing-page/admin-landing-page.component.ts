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

  public companyCreateShow: boolean = false

  public stockExchangeListShow: boolean = false

  public stockExchangeCreateShow: boolean = false

  constructor() { }

  ngOnInit() {
  }

  uploadClicked(e){
    if(e == true){
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = true
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
    }
  }

  okClicked(e){
    if(e){
      this.companyCreateShow = false
      this.importExcelShow = true
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
    }
  }

  createNewCompanyClicked(e){
    if(e){
      this.companyCreateShow = true
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
    }
  }

  companySaved(e){
    if(e){
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = true
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
    }
  }

  stockExchangeSaved(e){
    if(e){
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.stockExchangeListShow = true
      this.stockExchangeCreateShow = false
    }
  }

  newStockExchangeClicked(e){
    if(e){
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = true
    }
    
  }

  importDataClick(){
    this.importExcelShow = true
    this.uploadSummaryShow = false
    this.companyListShow = false
    this.companyCreateShow = false
    this.stockExchangeListShow = false
    this.stockExchangeCreateShow = false
  }

  manageCompanyClick(){
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = true
    this.companyCreateShow = false
    this.stockExchangeListShow = false
    this.stockExchangeCreateShow = false
  }

  manageExchangeClick(){
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = false
    this.companyCreateShow = false
    this.stockExchangeListShow = true
    this.stockExchangeCreateShow = false
  }

}

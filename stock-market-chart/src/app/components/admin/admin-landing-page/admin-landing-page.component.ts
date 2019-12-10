import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import axios from 'axios'

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

  public ipoListShow: boolean = false

  public ipoCreateShow: boolean = false

  public username: string = ''

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.username = params["username"];
    });
  }

  logout() {
    axios
      .post("http://localhost:7001/user/logout/", {
        username: this.username
      })
      .then((reponse: any) => {
        console.log(reponse.data)
        console.log(reponse.data.loginStatus) 
        if (reponse.data.loginStatus == false) {
          this.router.navigateByUrl("/user/signin");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  uploadClicked(e){
    if(e == true){
      this.companyCreateShow = false
      this.importExcelShow = false
      this.uploadSummaryShow = true
      this.companyListShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = false
      this.ipoCreateShow = false
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
      this.ipoListShow = false
      this.ipoCreateShow = false
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
      this.ipoListShow = false
      this.ipoCreateShow = false
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
      this.ipoListShow = false
      this.ipoCreateShow = false
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
      this.ipoListShow = false
      this.ipoCreateShow = false
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
      this.ipoListShow = false
      this.ipoCreateShow = false
    }
    
  }

  importDataClick(){
    this.importExcelShow = true
    this.uploadSummaryShow = false
    this.companyListShow = false
    this.companyCreateShow = false
    this.stockExchangeListShow = false
    this.stockExchangeCreateShow = false
    this.ipoListShow = false
    this.ipoCreateShow = false
  }

  manageCompanyClick(){
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = true
    this.companyCreateShow = false
    this.stockExchangeListShow = false
    this.stockExchangeCreateShow = false
    this.ipoListShow = false
    this.ipoCreateShow = false
  }

  manageExchangeClick(){
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = false
    this.companyCreateShow = false
    this.stockExchangeListShow = true
    this.stockExchangeCreateShow = false
    this.ipoListShow = false
    this.ipoCreateShow = false
  }

  updateIPODetailsClick(){
    this.importExcelShow = false
    this.uploadSummaryShow = false
    this.companyListShow = false
    this.companyCreateShow = false
    this.stockExchangeListShow = false
    this.stockExchangeCreateShow = false
    this.ipoListShow = true
    this.ipoCreateShow = false
  }

  createNewIPOClicked(e){
    if(e){
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.companyCreateShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = false
      this.ipoCreateShow = true
    }
  }

  IPOSaved(e){
    if(e){
      this.importExcelShow = false
      this.uploadSummaryShow = false
      this.companyListShow = false
      this.companyCreateShow = false
      this.stockExchangeListShow = false
      this.stockExchangeCreateShow = false
      this.ipoListShow = true
      this.ipoCreateShow = false
    }
  }

}

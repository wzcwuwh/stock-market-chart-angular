import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import axios from "axios";

@Component({
  selector: "app-user-landing-page",
  templateUrl: "./user-landing-page.component.html",
  styleUrls: ["./user-landing-page.component.css"]
})
export class UserLandingPageComponent implements OnInit {
  public username: string = "";

  public companySearchTxt: string = "";

  public searchResults: any[] = [];

  public suggestResults: any[] = [];

  public promptShow: boolean = false

  public companyListShow: boolean = true

  public compareChartsShow: boolean = false

  public ipoShow: boolean = false

  public companyOrSector: String = ''

  public searchTxtReadonly: boolean = false

  public searchDisabled: boolean = false

  constructor(public activatedRoute: ActivatedRoute, public router: Router) {}

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

  profile() {
    this.router.navigateByUrl(
      this.router.createUrlTree(["/user/profile"], {
        queryParams: {
          username: this.username
        }
      })
    );
  }

  updatePwd() {
    this.router.navigateByUrl(
      this.router.createUrlTree(["/user/reset/pwd"], {
        queryParams: {
          username: this.username
        }
      })
    );
  }

  companyListClick() {
    this.searchTxtReadonly = false
    this.searchDisabled = false
    this.companyListShow = true
    this.compareChartsShow = false
    this.ipoShow = false
  }

  compareCompanyClick(){
    this.compareChartsShow = true
    this.searchTxtReadonly = true
    this.searchDisabled = true
    this.companyListShow = false
    this.companyOrSector = 'Company'
    this.ipoShow = false
  }

  compareSectorClick(){
    this.compareChartsShow = true
    this.searchTxtReadonly = true
    this.searchDisabled = true
    this.companyListShow = false
    this.companyOrSector = 'Sector'
    this.ipoShow = false
  }

  IPOSClick(){
    this.searchTxtReadonly = true
    this.searchDisabled = true
    this.companyListShow = false
    this.compareChartsShow = false
    this.ipoShow = true
  }

  companySearch() {
    axios
      .post("http://localhost:7002/company/search", {
        companySearchTxt: this.companySearchTxt
      })
      .then((response: any) => {
        this.searchResults = response.data.companies;
      })
      .catch(error => {
        console.log(error);
      });
  }

  keyup() {
    //prompt from at least two character keywords
    if (this.companySearchTxt.length > 1) {
      axios
        .post("http://localhost:7002/company/search", {
          companySearchTxt: this.companySearchTxt
        })
        .then((response: any) => {
          this.suggestResults = response.data.companies;
          if (this.suggestResults.length > 0) {
            this.promptShow = true
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.promptShow = false
    }
  }

  promptClick(key){
    this.companySearchTxt = this.suggestResults[key].companyName
    this.companySearch()
    this.promptShow = false
  }

}

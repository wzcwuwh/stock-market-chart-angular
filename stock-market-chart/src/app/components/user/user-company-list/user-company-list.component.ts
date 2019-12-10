import { Component, OnInit, Input, SimpleChanges, OnChanges } from "@angular/core";

import axios from "axios";

@Component({
  selector: "app-user-company-list",
  templateUrl: "./user-company-list.component.html",
  styleUrls: ["./user-company-list.component.css"]
})
export class UserCompanyListComponent implements OnInit, OnChanges {
  @Input() searchResults: any[] = [];

  public companyList: any[] = [];

  constructor() {}

  ngOnInit() {
    //clear the array first before get the data from back end 
    this.companyList = this.companyList.slice(this.companyList.length + 1)
    axios
      .get("http://localhost:7002/company/list")
      .then((response: any) => {
        for (let json of response.data.companies) {
          let tmpJson = {
            companyName: json.companyName,
            turnOver: json.turnOver,
            CEO: json.CEO,
            boardChairman: json.boardChairman,
            sector: json.sector,
            briefWriteup: json.briefWriteup,
            latestStockPrice: json.currentPrice,
            logo: atob(json.logo)
          };
          this.companyList.push(tmpJson);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    //clear the array first before get the search result from back end
    this.companyList = this.companyList.slice(this.companyList.length + 1)
    console.log(this.searchResults)
    for (let json of this.searchResults) {
      let tmpJson = {
        companyName: json.companyName,
        turnOver: json.turnOver,
        CEO: json.CEO,
        boardChairman: json.boardChairman,
        sector: json.sector,
        briefWriteup: json.briefWriteup,
        logo: atob(json.logo)
      };
      this.companyList.push(tmpJson);
    }
  }
}

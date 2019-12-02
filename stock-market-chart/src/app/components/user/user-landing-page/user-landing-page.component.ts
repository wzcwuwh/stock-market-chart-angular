import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import axios from "axios";
import * as $ from "jquery";

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
        console.log(reponse.data);
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

  companyListClick() {}

  companySearch() {
    axios
      .post("http://localhost:7002/company/search", {
        companySearchTxt: this.companySearchTxt
      })
      .then((response: any) => {
        console.log(response.data.companies);
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
            this.addPrompt()
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      $("#search_suggest").hide()
    }
  }

  addPrompt(){
    //remove the appended children before append again
    $("#search-result").children().remove()
    var html = "";
    for (let json of this.suggestResults) {
      html +=
        '<li class="list-group-item">' + json.companyName + "</li>";
    }
    $("#search-result").append(html);
    $("#search-result li").css('width', $('#companySearchTxt').outerWidth())
    $("#search_suggest")
    .show()
    .css({
      top:
        $("#search-form").offset().top +
        $("#search-form").outerHeight(),
      left: $("#search-form").offset().left - 165,
      position: "absolute"
    });
  }

}

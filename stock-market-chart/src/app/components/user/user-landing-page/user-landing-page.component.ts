import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import axios from 'axios'

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {

  public username: string = ''

  public companySearchTxt: string = ''

  public searchResults: any[] = []

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.username = params['username']
    })
  }

  logout(){
    axios.post('http://localhost:7001/user/logout/',{
      username: this.username
    })
    .then((reponse: any)=>{
      console.log(reponse.data)
      if(reponse.data.loginStatus == false){
        this.router.navigateByUrl('/user/signin')
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  profile(){
    this.router.navigateByUrl(this.router.createUrlTree(
      ['/user/profile'],
      {
        queryParams: {
          username: this.username
        }
      }
    ))
  }

  updatePwd(){
    this.router.navigateByUrl(this.router.createUrlTree(
      ['/user/reset/pwd'],
      {
        queryParams: {
          username: this.username
        }
      }
    ))
  }

  companyListClick(){

  }

  companySearch(){
    axios.post('http://localhost:7002/company/search',{
      companySearchTxt: this.companySearchTxt
    })
    .then((response: any)=>{
      console.log(response.data.companies)
      this.searchResults = response.data.companies
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}

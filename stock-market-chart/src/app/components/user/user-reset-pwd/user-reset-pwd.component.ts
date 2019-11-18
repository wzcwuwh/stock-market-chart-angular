import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import axios from 'axios'

@Component({
  selector: 'app-user-reset-pwd',
  templateUrl: './user-reset-pwd.component.html',
  styleUrls: ['./user-reset-pwd.component.css']
})
export class UserResetPwdComponent implements OnInit {

  public username: string

  public newPwd: string

  public newConfPwd: string

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.username = params['username']
    })
  }

  reset(){
    if(this.newPwd.length > 0 && this.newConfPwd.length > 0){
      if(this.newPwd == this.newConfPwd){
        axios.put('http://localhost:7001/user/pwd/', {
        username: this.username,
        password: this.newPwd
      })
      .then(
        (response : any) => {
          this.router.navigateByUrl(this.router.createUrlTree(
            ['/user/menu'],
            {
              queryParams: {
                username: this.username
              }
            }
            )
          )
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
      } else {
        var regiWarn = $('#regiWarn')
      regiWarn.addClass('fa fa-times')
      regiWarn.text('password inconsistent')
      regiWarn.css('color', 'red')
      }
    } else {
      var regiWarn = $('#regiWarn')
      regiWarn.addClass('fa fa-times')
      regiWarn.text('password could not blank')
      regiWarn.css('color', 'red')
    }
  }

}

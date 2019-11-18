import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'

import * as $ from 'jquery'

@Component({
  selector: 'app-user-signup-pwd',
  templateUrl: './user-signup-pwd.component.html',
  styleUrls: ['./user-signup-pwd.component.css']
})
export class UserSignupPwdComponent implements OnInit {

  public username: string = ''

  public password: string = ''

  public confirmedPwd: string = ''

  public policyAgreed: boolean = false

  public signupDisabled: boolean = true

  constructor(public activateRouter: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activateRouter.queryParams.subscribe((params: any) => {
      this.username = params['username']
    })
  }

  policyChecked(){
    if(this.password.length > 0 && this.confirmedPwd.length > 0 && !this.policyAgreed){
      this.signupDisabled = false
    } else {
      this.signupDisabled = true
    }
  }

  signup(){
    if(this.policyAgreed && this.password == this.confirmedPwd){
      //TODO: store in DB
      this.router.navigateByUrl('/user/sign')
    } else {
      var regiWarn = $('#regiWarn')
      regiWarn.addClass('fa fa-times')
      regiWarn.text('password inconsistent')
      regiWarn.css('color', 'red')
    }
  }

}

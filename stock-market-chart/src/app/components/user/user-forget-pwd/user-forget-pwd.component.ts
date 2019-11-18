import { Component, OnInit } from '@angular/core'
import {Router} from '@angular/router'

import {EmailValidationService} from '../../../services/email-validation.service'
import {EncryptService} from '../../../services/encrypt.service'

import axios from 'axios'

@Component({
  selector: 'app-user-forget-pwd',
  templateUrl: './user-forget-pwd.component.html',
  styleUrls: ['./user-forget-pwd.component.css']
})
export class UserForgetPwdComponent implements OnInit {

  public username: string = ''

  public resetPwd: string = ''

  constructor(public emailValidationService: EmailValidationService, public router: Router, public encryptService: EncryptService) { }

  ngOnInit() {
  }

  usernameBlur(){
    this.emailValidationService.emailValidation(this.username)
  }

  send(){
    if(this.emailValidationService.emailValidation(this.username)){
      axios.post('http://localhost:7001/user/reset/pwd/', {
        username: this.username
      })
      .then(
        (response : any) => {
          this.router.navigateByUrl('/user/sign')
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    }
  }

}

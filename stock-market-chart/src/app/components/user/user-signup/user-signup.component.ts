import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {EncryptService} from '../../../services/encrypt.service'
import {EmailValidationService} from '../../../services/email-validation.service'

import axios from 'axios';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  public username:string = ''

  public placeholder:string = 'email for signup...'

  public prefixCode:any

  public suffixCode:any

  public encryptKey:string = 'ibmfullstackdeve'

  constructor(public router: Router, public encryptService: EncryptService, public emailValidationService: EmailValidationService) { }

  ngOnInit() {
  }

  usernameFocus(){
    this.placeholder = ''
  }

  usernameBlur(){
    this.placeholder = 'email for signup...'
    this.emailValidationService.emailValidation(this.username)
  }

  submit(){
    if(this.emailValidationService.emailValidation(this.username)){
      axios.post('http://localhost:7001/user/veri/code/', {
        username: this.username
      })
      .then(
        (response : any) => {
          this.prefixCode = response.data.prefixCode
          let encryptedPrefixCode = this.encryptService.aesEncrypt(this.prefixCode)
          this.suffixCode = response.data.suffixCode
          let encryptedSuffixCode = this.encryptService.aesEncrypt(this.suffixCode)
          this.router.navigateByUrl(this.router.createUrlTree(
            ['/user/veri/code'], 
            {queryParams: 
              {
                'prefixCode': encryptedPrefixCode, 
                'suffixCode': encryptedSuffixCode,
                'username': this.username
              }
            }), 
          )
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

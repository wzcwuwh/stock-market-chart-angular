import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {EncryptService} from '../../../services/encrypt.service'

import * as $ from 'jquery'
import axios from 'axios'
import { stringify } from 'querystring';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {

  public username:string = ''

  public password:string = ''

  constructor(public router:Router, public encrypteService: EncryptService) { }

  ngOnInit() {
  }

  userLogin(){
    // if(this.inputValidation()){
    //   this.router.navigateByUrl('/user/menu')
    // }
    this.inputValidation()
  }

  inputValidation():boolean{
    if(this.username.length > 0 && this.password.length > 0){
      axios.post('http://localhost:7001/user/signin',{
        username: this.username,
        password: this.password
      })
      .then(
        (response : any) => {
          console.log(response.data)
          if(response.data != null){
            console.log(response.data.resetPwd)
            if(response.data.resetPwd == true){
              this.router.navigateByUrl(this.router.createUrlTree(
                ['/user/reset/pwd'],
                {
                  queryParams: {
                    username: this.username
                  }
                }
              ))
            } else {
              this.router.navigateByUrl('/user/menu')
            }
          } else {
            let loginWarn = $('#loginWarn')
            loginWarn.addClass('fa fa-times')
            loginWarn.text(' username or password blank')
            loginWarn.css('color', 'red')
            return false
          }
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
    } else{
      let loginWarn = $('#loginWarn')
      loginWarn.addClass('fa fa-times')
      loginWarn.text(' username or password blank')
      loginWarn.css('color', 'red')
      return false
    }
  }

}

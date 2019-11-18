import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor() { }

  emailValidation(username: string):boolean{
    var regiWarn = $('#regiWarn')

    let regExp = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    if(username == null || username.length == 0){
      regiWarn.addClass('fa fa-times')
      regiWarn.css('color', 'red')
      regiWarn.text(' could not be blank')
      console.log(regiWarn.text())
      return false
    } else {
      let flag = regExp.test(username)
      if(flag){
        //TODO: request from DB
        if(localStorage.getItem(username) != null ) {
          regiWarn.addClass('fa fa-times')
          regiWarn.text(' username already exists')
          regiWarn.css('color','red')
          return false
        } else{
          regiWarn.addClass('fa fa-check')
          regiWarn.text(' username valid')
          regiWarn.css('color','green')
          return true
        }
      } else{
        regiWarn.addClass('fa fa-times')
        regiWarn.text(' invalid email format')
        regiWarn.css('color','red')
        return false
      }
    }
  }
}

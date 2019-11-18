import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'

import {EncryptService} from '../../../../services/encrypt.service'

@Component({
  selector: 'app-user-veri-code',
  templateUrl: './user-veri-code.component.html',
  styleUrls: ['./user-veri-code.component.css']
})
export class UserVeriCodeComponent implements OnInit {

  public digit6 : string = ''

  public placeholder : string = '6 digits code'

  public prefixCode : any

  public suffixCode : any

  public username: string = ''

  constructor(public activeRoute:ActivatedRoute, public encrypteService: EncryptService, public router: Router) { }

  ngOnInit() {
    // this.prefixCode = this.activeRoute.snapshot.params['prefixCode']
    // console.log(this.prefixCode)
    // this.suffixCode = this.activeRoute.snapshot.params['suffixCode']
    // console.log(this.suffixCode)
    this.activeRoute.queryParams.subscribe((params:any) => {
      let encryptedPrefixCode = params['prefixCode']
      this.prefixCode = this.encrypteService.aesDecrypt(encryptedPrefixCode)
      let encryptedSuffixCode = params['suffixCode']
      this.suffixCode = this.encrypteService.aesDecrypt(encryptedSuffixCode)
      this.username = params['username']
    })
  }

  digit6Focus(){
    this.placeholder = ''
  }

  digit6Blur(){
    this.placeholder = '6 digits code'
  }

  verify(){
    if(this.digit6 == this.suffixCode){
      this.router.navigateByUrl(this.router.createUrlTree(['/user/signup/pwd'], {
        queryParams: {
          'username': this.username
        }
      }))
    } else{
      console.log('nonono')
    }
  }

}

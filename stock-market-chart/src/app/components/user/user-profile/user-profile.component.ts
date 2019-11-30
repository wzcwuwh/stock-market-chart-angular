import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'

import axios from 'axios'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public username: string = ''

  public contactNo: string = ''

  constructor(public activatedRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params)=>{
      this.username = params['username']
    })
  }

  update(){
    axios.put('http://localhost:7001/user/profile', {
      username: this.username,
      contactNo: this.contactNo
    })
    .then((response: any)=>{
      console.log(response.data)
      if(response.data.contactNo != null){
        this.router.navigateByUrl(this.router.createUrlTree(
          ['/user/land'],
          {
            queryParams: {
              username: this.username
            }
          }
        ))
      }
    })
    .catch(()=>{

    })
  }

  cancel(){
    this.router.navigateByUrl(this.router.createUrlTree(
      ['/user/land'],
      {
        queryParams: {
          username: this.username
        }
      }
    ))
  }

}

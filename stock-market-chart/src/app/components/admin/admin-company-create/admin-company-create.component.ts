import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-company-create',
  templateUrl: './admin-company-create.component.html',
  styleUrls: ['./admin-company-create.component.css']
})
export class AdminCompanyCreateComponent implements OnInit {

  public companyName: string = ''

  public CEO: string = ''

  public boardOfDirectors: string = ''

  public turnover: number

  public briefWriteup: string = ''

  @Output() private companySaved = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  save(){
    axios.post('http://localhost:7002/company/new',{
        companyName: this.companyName,
        CEO: this.CEO,
        boardOfDirectors: this.boardOfDirectors,
        turnover: this.turnover,
        briefWriteup: this.briefWriteup
      })
      .then(
        (response : any) => {
          console.log(response.data)
          if(response.data.data == 'success'){
            this.companySaved.emit(true)
          }
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

}

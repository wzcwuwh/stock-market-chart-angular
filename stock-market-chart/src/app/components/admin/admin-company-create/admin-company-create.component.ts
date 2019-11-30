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

  public boardChairman: string = ''

  public turnover: number

  public sector: string = ''

  public briefWriteup: string = ''

  public selectedFile: any

  @Output() private companySaved = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(btoa(this.selectedFile))
    axios.post('http://localhost:7002/company/new', {
      companyName: this.companyName,
      CEO: this.CEO,
      boardChairman: this.boardChairman,
      turnover: this.turnover,
      sector: this.sector,
      briefWriteup: this.briefWriteup,
      logoPath: btoa(this.selectedFile)
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

  uploadFileChange(e){
    this.selectedFile = e.target.files[0]
  }

}

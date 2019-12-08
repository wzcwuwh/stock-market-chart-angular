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

  public preview: string = ''

  @Output() private companySaved = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  save(){
    // console.log(btoa(this.selectedFile))
    axios.post('http://localhost:7002/company/new', {
      companyName: this.companyName,
      CEO: this.CEO,
      boardChairman: this.boardChairman,
      turnover: this.turnover,
      sector: this.sector,
      briefWriteup: this.briefWriteup,
      logo: btoa(this.preview)
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

  uploadFileChange(event){
    this.selectedFile = event.target.files[0]
    var reader = new FileReader()

    reader.onload = (e)=>{
      this.preview = reader.result as string
      console.log(this.preview)
    }

    reader.readAsDataURL(this.selectedFile)
  }

}

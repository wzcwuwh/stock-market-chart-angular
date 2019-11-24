import { Component, OnInit } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-import-excel',
  templateUrl: './admin-import-excel.component.html',
  styleUrls: ['./admin-import-excel.component.css']
})
export class AdminImportExcelComponent implements OnInit {

  public file: Blob

  constructor() { }

  ngOnInit() {
  }

  upload(){
    if(this.upload){
      var formData = new FormData()
      formData.append('file', this.file)
      axios.post('http://localhost:7005/excel/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data;charset=utf-8'
        }
      })
      .then(
        (response : any) => {
        
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

import { Component, OnInit } from '@angular/core';

import axios from 'axios'
import * as $ from 'jquery'
import axiosFileupload from 'axios-fileupload'

@Component({
  selector: 'app-admin-import-excel',
  templateUrl: './admin-import-excel.component.html',
  styleUrls: ['./admin-import-excel.component.css']
})
export class AdminImportExcelComponent implements OnInit {

  public selectedFile : any

  constructor() { }

  ngOnInit() {
  }

  handleExcel(e){
      // console.log(e.target.files[0]);
      this.selectedFile = e.target.files[0]
      // axiosFileupload('http://localhost:7005/excel/import',e.target.files[0])
  }

  upload(){
    axiosFileupload('http://localhost:7005/excel/import',this.selectedFile)
      // var formData = new FormData()
      // formData.append('file', )
      // axios.post('http://localhost:7005/excel/import', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // })
      // .then(
      //   (response : any) => {
      //     console.log('upload 666')
      //    }
      // )
      // .catch(
      //   (error) => {
      //     console.log(error)
      //   }
      // )
  }

}

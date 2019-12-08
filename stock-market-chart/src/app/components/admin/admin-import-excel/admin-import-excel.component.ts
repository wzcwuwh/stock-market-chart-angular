import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-import-excel',
  templateUrl: './admin-import-excel.component.html',
  styleUrls: ['./admin-import-excel.component.css']
})
export class AdminImportExcelComponent implements OnInit {

  @Output() private uploadClicked = new EventEmitter()

  public excelUploaded: boolean = false

  public selectedFile : any

  constructor() { }

  ngOnInit() {
  }

  handleExcel(e){
      this.selectedFile = e.target.files[0]
  }

  upload(){
      if(!this.selectedFile){
        alert('pls select an excel file to upload.')
      }
    // axiosFileupload('http://localhost:7005/excel/import',this.selectedFile)
      var formData = new FormData()
      formData.append('file', this.selectedFile)
      axios.post('http://localhost:7005/excel/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then(
        (response : any) => {
          this.excelUploadDataToUploadSummary(response)
          this.excelUploaded = true
          this.uploadClicked.emit(this.excelUploaded)
         }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  excelUploadDataToUploadSummary(response: any){
    let companyCode = response.data.summaryOfUpload[0].companyName
    let stockExchange = response.data.summaryOfUpload[0].stockExchange
    let NoOfRecordsImported = response.data.summaryOfUpload[0].NoOfRecordsImported
    let fromDate = response.data.summaryOfUpload[0].date + " " + response.data.summaryOfUpload[0].time
    let toDate = response.data.summaryOfUpload[1].date + " " + response.data.summaryOfUpload[1].time

    localStorage.setItem("companyCode", companyCode)
    localStorage.setItem("stockExchange", stockExchange)
    localStorage.setItem("NoOfRecordsImported", NoOfRecordsImported)
    localStorage.setItem("fromDate", fromDate)
    localStorage.setItem("toDate", toDate)
  }

}

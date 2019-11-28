import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-admin-stock-exchange-create',
  templateUrl: './admin-stock-exchange-create.component.html',
  styleUrls: ['./admin-stock-exchange-create.component.css']
})
export class AdminStockExchangeCreateComponent implements OnInit {

  public stockExchangeName: string = ''

  public stockExchangeBrief: string = ''

  public stockExchangeAddress: string = ''

  public stockExchangeRemarks: string = ''

  @Output() private stockExchangeSaved = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  save(){
    axios.post('http://localhost:7004/stock-exchange/new',{
      stockExchangeName: this.stockExchangeName,
      stockExchangeBrief: this.stockExchangeBrief,
      stockExchangeAddress: this.stockExchangeAddress,
      stockExchangeRemarks: this.stockExchangeRemarks
      })
      .then(
        (response : any) => {
          console.log(response.data)
          if(response.data.data == 'success'){
            this.stockExchangeSaved.emit(true)
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

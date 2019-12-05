import { Component, OnInit, Input } from '@angular/core';

import axios from 'axios'

@Component({
  selector: 'app-user-comparison-charts',
  templateUrl: './user-comparison-charts.component.html',
  styleUrls: ['./user-comparison-charts.component.css']
})
export class UserComparisonChartsComponent implements OnInit {

  @Input() companyOrSector: String = ''

  public companyList: any[] = []

  public stockExchangeList: any[] = []

  public backgroundColor: string = ''

  public selectedCompanyName: string = ''

  public selectedStockExchangeName: string = ''

  public fromPeriod: Date

  public toPeriod: Date

  public periodSize: string = ''

  public periodUnit: string = ''

  constructor() { }

  ngOnInit() {
    //clear the array first before get the data from back end 
    this.companyList = this.companyList.slice(this.companyList.length + 1)
    axios
      .get("http://localhost:7002/company/list")
      .then((response: any) => {
        this.companyList = response.data.companies
      })
      .catch(error => {
        console.log(error);
      });

      this.stockExchangeList = this.stockExchangeList.slice(this.stockExchangeList.length + 1)
    axios
      .get("http://localhost:7004/stock-exchange/list")
      .then((response: any) => {
        this.stockExchangeList = response.data.stockExchanges
      })
      .catch(error => {
        console.log(error);
      });
  }

  generateMap(){
    axios.post('http://localhost:7002/company/compare',{
      companyName: this.selectedCompanyName,
      stockExchangeName: this.selectedStockExchangeName,
      fromPeriod: this.fromPeriod,
      toPeriod: this.toPeriod,
      periodSize: this.periodSize,
      periodUnit: this.periodUnit
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
    this.displayCharts()
  }

  displayCharts(){
    //set background color to white for display reason
    this.backgroundColor = 'white'
    // based on prepared DOM, initialize echarts instance
    var main = document.getElementById('main') as HTMLDivElement
    var myChart = echarts.init(main);

    // specify chart configuration item and data
    var option = {
        title: {
            text: 'ECharts entry example'
        },
        toolbox: {
          show: true,
          feature: {
            saveImage: {
              show: true
            }
          }
        },
        legend: {
            data:['Sales']
        },
        xAxis: {
            data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
        },
        yAxis: {},
        series: [{
            name: 'Sales',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
  }

  getCompanyName(e){
    this.selectedCompanyName = e.target.value
    console.log(this.selectedCompanyName)
  }

  getStockExchangeName(e){
    this.selectedStockExchangeName = e.target.value
    console.log(this.selectedStockExchangeName)
  }

  fromPeriodChange(e){
    this.fromPeriod = e.target.value
  }

  toPeriodChange(e){
    this.toPeriod = e.target.value
  }

  periodUnitChange(e){
    this.periodUnit = e.target.value
  }

}

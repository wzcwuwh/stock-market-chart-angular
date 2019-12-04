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

  public echartsIntance: any

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
    // based on prepared DOM, initialize echarts instance
    var main = document.getElementById('main') as HTMLDivElement
    var myChart = echarts.init(main);

    // specify chart configuration item and data
    var option = {
        title: {
            text: 'ECharts entry example'
        },
        tooltip: {},
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
}

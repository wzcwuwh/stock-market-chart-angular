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

  public timeline: any[] = []

  public priceStack: any[] = []

  public myChart: any

  public addDisabled: boolean = true

  public chartSeries: any[] = []

  public seriesJson: any = {}

  public chartLegend: any[] = []

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
    this.addDisabled = false
    //set background color to white for display reason
    this.backgroundColor = 'white'
    // based on prepared DOM, initialize echarts instance
    var main = document.getElementById('main') as HTMLDivElement
    this.myChart = echarts.init(main);

    axios.post('http://localhost:7002/company/compare',{
      companyName: this.selectedCompanyName,
      stockExchangeName: this.selectedStockExchangeName,
      fromPeriod: this.fromPeriod,
      toPeriod: this.toPeriod,
      periodSize: this.periodSize,
      periodUnit: this.periodUnit
    })
    .then((response)=>{
      console.log(response.data.stockPriceDetails)
      for(let json of response.data.stockPriceDetails){
        this.timeline.push(json.currentDate + ' ' + json.currentTime)
        this.priceStack.push(json.currentPrice)
      }

      this.seriesJson = {
        name: this.selectedCompanyName,
            type: 'line',
            data: this.priceStack,
            markPoint: {
              data: [
                {type: 'max', name: 'max'},
                {type: 'min', name: 'min'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: 'average'}
              ]
            }
      }
      this.chartSeries.push(this.seriesJson)
      this.chartLegend.push(this.selectedCompanyName)
      console.log(this.chartLegend)
      this.myChart.setOption({
        title: {
            text: 'Company Compare Charts'
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {
              show: true
            },
            magicType: {
              type: ['bar', 'line']
            }
          }
        },
        legend: {
            data: this.chartLegend
        },
        xAxis: {
            data: this.timeline
        },
        yAxis: {},
        series: this.chartSeries
    });
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  getCompanyName(e){
    this.selectedCompanyName = e.target.value
  }

  getStockExchangeName(e){
    this.selectedStockExchangeName = e.target.value
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

  add(){
    this.timeline = this.timeline.slice(this.timeline.length + 1)
    this.priceStack = this.priceStack.slice(this.priceStack.length + 1)
    axios.post('http://localhost:7002/company/compare',{
      companyName: this.selectedCompanyName,
      stockExchangeName: this.selectedStockExchangeName,
      fromPeriod: this.fromPeriod,
      toPeriod: this.toPeriod,
      periodSize: this.periodSize,
      periodUnit: this.periodUnit
    })
    .then((response)=>{
      console.log(response.data.stockPriceDetails)
      for(let json of response.data.stockPriceDetails){
        this.timeline.push(json.currentDate + ' ' + json.currentTime)
        this.priceStack.push(json.currentPrice)
      }

      this.seriesJson = {
        name: this.selectedCompanyName,
        type: 'line',
            data: this.priceStack,
            markPoint: {
              data: [
                {type: 'max', name: 'max'},
                {type: 'min', name: 'min'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: 'average'}
              ]
            }
      }
      this.chartSeries.push(this.seriesJson)
      this.chartLegend.push(this.selectedCompanyName)
      console.log(this.chartLegend)
      console.log(this.chartSeries) 
      this.myChart.setOption({
        legend: {
          data: this.chartLegend
        },
        series: this.chartSeries
    });
    })
    .catch((error)=>{
      console.log(error)
    })
  }

}

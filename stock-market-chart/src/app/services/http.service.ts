import { Injectable } from '@angular/core';

import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public instance = axios.create({
    baseURL: 'http://localhost:9000/ibm/',
    timeout: 2000
  })

  constructor() { }

  async get(url: string){
    try {
      let res = await this.instance.get(url)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  async post(url: string, data: any){
    try {
      let res = await this.instance.post(url, data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
}

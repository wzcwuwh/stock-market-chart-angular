import { Injectable } from '@angular/core';

import * as crypto from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  public serectKey: string = 'ibmfullstackdeve'

  constructor() { }

  aesEncrypt(data: string): any{
    return crypto.AES.encrypt(data, this.serectKey)
  }

  aesDecrypt(encrypted: string): any{
    return crypto.AES.decrypt(encrypted, this.serectKey).toString(crypto.enc.Utf8)
  }
}

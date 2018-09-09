import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ApplicationConstants} from '../../constants/application.constants';
/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constants= new ApplicationConstants();
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getRates() {
    console.log(this.constants.base_url);
    return new Promise(resolve => {
      this.http.get(this.constants.base_url).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}

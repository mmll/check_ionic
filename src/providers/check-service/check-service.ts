import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {CheckItem} from "../../unity/checkItem";
import {SERVICE_CONFIG} from "../serverConfig";
import 'rxjs/add/operator/map'
import {map} from "rxjs/operators";

/*
  Generated class for the CheckServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CheckServiceProvider {
  constructor(public HttpClient: HttpClient) {
    console.log('Hello CheckServiceProvider Provider');
  }
  public getChecklist(): Observable <CheckItem[]>{
    return this.HttpClient
        .get(SERVICE_CONFIG.apiUrl + '/checklist')
        .pipe(map((list: Array<any>) => {
          return list.map((item) => new CheckItem(item));
        }));
  }
  public checkItem(id, checked){
      let payload = {id:id, checked: checked};
      return this.HttpClient.get(SERVICE_CONFIG.apiUrl+'/checkItem')
  }
}

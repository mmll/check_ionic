import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Goal } from "../../unity/goal";
import { SERVICE_CONFIG } from "../serverConfig";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map'
import {map} from "rxjs/operators";

/*
  Generated class for the GoalServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoalServiceProvider {

  constructor(public HttpClient: HttpClient) {
    console.log('Hello GoalServiceProvider Provider');
  }
  updateGoal(goal: Goal){
      return new Promise(resolve => {
          this.HttpClient.post(SERVICE_CONFIG.apiUrl +'/goal/update',JSON.stringify(goal),{headers: SERVICE_CONFIG.headers}).subscribe(data => {
              resolve(data);
          }, err => {
              console.log(err);
          });
      });
  }
  public getGoals(): Observable <Goal[]>{
      return this.HttpClient
          .get(SERVICE_CONFIG.apiUrl + '/goal')
          .pipe(map((list: Array<any>) => {
              return list.map((goal) => new Goal(goal));
          }));
  }
}

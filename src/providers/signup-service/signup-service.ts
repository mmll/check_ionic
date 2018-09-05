import { HttpClient , HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { User } from '../../unity/user'
import { SERVICE_CONFIG}  from '../serverConfig'

/*
  Generated class for the SignupServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// const headers = new HttpHeaders()
//     .append("Content-Type", "application/json")
//     .append("Access-Control-Allow-Origin", "*");
// const apiUrl = "http://localhost:8080";

@Injectable()
export class SignupServiceProvider {
  constructor(public http: HttpClient) {
    console.log('Hello SignupServiceProvider Provider');
  }
  signup(user){
  	let options = new RequestOptions();
  	return new Promise(resolve => {
    	this.http.post(SERVICE_CONFIG.apiUrl +'/signup',JSON.stringify(user),{headers: SERVICE_CONFIG.headers}).subscribe(data => {
      		resolve(data);
    	}, err => {
      	console.log(err);
    	});
  	});
  }
}

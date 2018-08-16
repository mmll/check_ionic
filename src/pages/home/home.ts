import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loginPage : any;
  constructor(public navCtrl: NavController) {
  	this.loginPage = LoginPage;
  }

}

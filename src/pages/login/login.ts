import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupServiceProvider } from '../../providers/signup-service/signup-service';
import { User } from '../../unity/user'
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [SignupServiceProvider]
})
export class LoginPage {
  username:string;
  password:string;
  user: User;
  constructor(public signService:SignupServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signup(){
  	this.user = new User(this.username, this.password);
    this.signService.signup(this.user);
  }

}

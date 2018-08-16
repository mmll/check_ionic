import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalPage } from '../goals/goal'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public goalPage : any;
  constructor(public navCtrl: NavController) {
  	this.goalPage = GoalPage;
  }
}

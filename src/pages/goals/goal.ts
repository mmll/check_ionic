import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 
import { Goal } from '../../unity/goal';

@Component({
  selector: 'page-newGoal',
  templateUrl: 'goal.html'
})
export class GoalPage {
  goal: Goal;
  times: any;
  startDate: any;
  constructor(public navCtrl: NavController) {
  	this.goal=new Goal(null,"","","",null);
  	this.startDate = new Date().toISOString();
  	this.times = [{name:'1', value:1},{name:'2',value:2}];
  }
  goBack(){
  	this.navCtrl.pop();
  }
  createGoal(){

  }

}

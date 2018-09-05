import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 
import { Goal } from '../../unity/goal';
import { GoalServiceProvider } from "../../providers/goal-service/goal-service";

@Component({
  selector: 'page-newGoal',
  templateUrl: 'goal.html'
})
export class GoalPage {
  goal: Goal;
  times: any;
  startDate: any;
  constructor(public navCtrl: NavController, public goalService: GoalServiceProvider) {
  	this.goal=new Goal({});
  	this.startDate = new Date().toISOString();
  	this.times = [];
  	for(let i=0; i<7; i++){
  	    this.times.push({name:i+1,value:i+1});
    }
  }
  goBack(){
  	this.navCtrl.pop();
  }
  createGoal(){
    if(this.goal.validate(this.goal)){
        this.goalService.updateGoal(this.goal);
    }
    else{

    }
  }

}

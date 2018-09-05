import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoalPage } from '../goals/goal'
import {GoalServiceProvider} from "../../providers/goal-service/goal-service";
import {Goal} from "../../unity/goal";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public goalPage : any;
    private goalList: Array<Goal>;

  constructor(public navCtrl: NavController, public goalService: GoalServiceProvider) {
  	this.goalPage = GoalPage;
  	this.getGoals();
  }
  getGoals():void{
      this.goalService.getGoals().subscribe((goals : Goal[])=>{
          this.goalList = goals;
      });

  }
}

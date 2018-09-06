import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CheckServiceProvider} from "../../providers/check-service/check-service";
import {CheckItem} from "../../unity/checkItem";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private checkList: Array<CheckItem>;
  constructor(public navCtrl: NavController, public checkService: CheckServiceProvider) {
    this.getChecklsit()

  }
  public getChecklsit():void{
      this.checkService.getChecklist().subscribe((list:[CheckItem])=>{
        this.checkList = list;
      })
  }
  public doRefresh(refresher): void{
      this.getChecklsit();
      setTimeout(()=>{
        refresher.complete();
      },0)
  }
  public checkDone(item:CheckItem, checked: boolean):void{
    this.checkService.checkItem(item.id, checked).subscribe(response=>{
      if(response.result == 'true'){
          this.checkList = this.checkList.filter(option=> option.id != item.id)
      }
      else{

      }
    });
    //alert("checked "+ value);
    //this.checkList.splice(0,1);
  }
}

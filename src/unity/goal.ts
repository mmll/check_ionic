export class Goal {
    validate: (goal) => boolean;
  constructor(values: Object = {}) {
      Object.assign(this, values);
      this.validate = function(goal):boolean{
          if(goal.name && goal.startDate && goal.endDate && goal.time){
              return true;
          }
          else return false;
      }
    }
  }

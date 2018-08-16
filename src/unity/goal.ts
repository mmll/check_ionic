export class Goal {
  constructor(
    public id: number,
    public name: string, 
    public startDate: string,
    public endDate: string,
    public time: number) { 
  	this.startDate = new Date().toISOString();}
}
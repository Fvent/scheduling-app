import { PlatformLocation } from '@angular/common';
import { Component, OnInit, platformCore } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { NgbTypeaheadWindow } from '@ng-bootstrap/ng-bootstrap/typeahead/typeahead-window';
import { Goal } from "../../models/Goals"

// import { fs } as fs from 'fs';
// import { homedir } from "../../../../node_modules/os-homedir/";

@Component({
  selector: 'app-longterm-page',
  templateUrl: './longterm-page.component.html',
  styleUrls: ['./longterm-page.component.css']
})
export class LongtermPageComponent implements OnInit {

  showGoalForm : boolean = false;

  goals = [];
  selectedGoal: Goal = {
    name : '',
    description : ''
  }


  goalForm : FormGroup = new FormGroup({
    goalName: new FormControl(''),
    goalDescription: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
    this.getGoals();
  }

  onAddButton() {
    if(this.showGoalForm===false){
      this.showGoalForm = true;
    }else{
      this.showGoalForm = false;
    }
  }

  onGoalSubmit() {
    console.log(this.goalForm.value.goalName, this.goalForm.value.goalDescription);
    this.selectedGoal = {
      name: this.goalForm.value.goalName,
      description: this.goalForm.value.goalDescription
    };
    this.addGoal(this.selectedGoal);
  }

  addGoal(post: Goal) {
    this.goals.unshift(post);
    localStorage.setItem('goals',
    JSON.stringify(this.goals));
  }

  getGoals() {
    if(localStorage.getItem('goals')===null){
      this.goals = [];
    }else {
      this.goals = JSON.parse(localStorage.getItem('goals'));
    }
  }

  // deleteBacklog(task: Task){
  //   this.backlog = JSON.parse(localStorage.getItem('backlog'));
  //   var index = this.findBacklogIndex(task);
  //   // console.log(index);
  //   // console.log(backlog.name);
  //   // console.log(backlog.description);
  //   this.backlog.splice(index, 1);
  //   localStorage.setItem('backlog', JSON.stringify(this.backlog));
  // }

  deleteGoal(goal: Goal){
    this.goals = JSON.parse(localStorage.getItem('goals'));
    var index = this.findGoalIndex(goal);
    this.goals.splice(index, 1);
    localStorage.setItem('goals', JSON.stringify(this.goals));
  }


  // findTaskIndex(task: Task): number{
  //   var out:number=-1;
  //   this.tasks.forEach(t => {
  //     // console.log(t);
  //     // console.log(task);
  //     if((t.name == task.name) && (t.description == task.description) ){
  //       out= this.tasks.indexOf(t);
  //     }
  //   });
  //   return out;
  // }

  findGoalIndex(goal: Goal): number{
    var out: number = -1;
    this.goals.forEach( g => {
      if((g.name == goal.name) && (g.description == goal.description)){
        out = this.goals.indexOf(g);
      }
    });
    return out;
  } 


  


}

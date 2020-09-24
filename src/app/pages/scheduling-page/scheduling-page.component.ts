import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Task } from "../../models/Tasks"
import { DataSharingService } from "../../services/data-sharing/data-sharing.service";

@Component({
  selector: 'app-scheduling-page',
  templateUrl: './scheduling-page.component.html',
  styleUrls: ['./scheduling-page.component.css']
})
export class SchedulingPageComponent implements OnInit {
  showTaskForm : boolean = false;

  taskForm : FormGroup = new FormGroup({
    taskDate: new FormControl(''),
    taskName: new FormControl(''),
    taskDescription: new FormControl(''),
  });

  selectedTask: Task = {
    date: null,
    name: '',
    description: ''
  }

  constructor(private dataSharingService: DataSharingService) {
    
   }

  ngOnInit(): void {
  }

  onAddButton() {
    if(this.showTaskForm===false){
      this.showTaskForm = true;
    }else{
      this.showTaskForm = false;
    }
  }


  // onGoalSubmit() {
  //   console.log(this.goalForm.value.goalName, this.goalForm.value.goalDescription);
  //   this.selectedGoal = {
  //     name: this.goalForm.value.goalName,
  //     description: this.goalForm.value.goalDescription
  //   };
  //   this.addGoal(this.selectedGoal);
  // }


  onTaskSubmit() {
    console.log(this.taskForm.value.taskDate, this.taskForm.value.taskName, this.taskForm.value.taskDescription);
     this.selectedTask = {
       date: this.taskForm.value.taskDate,
       name: this.taskForm.value.taskName,
       description: this.taskForm.value.taskDescription
     };
     this.dataSharingService.addTask(this.selectedTask);
  }

  // addGoal(post: Goal) {
  //   this.goals.unshift(post);
  //   localStorage.setItem('goals',
  //   JSON.stringify(this.goals));
  // }  

}

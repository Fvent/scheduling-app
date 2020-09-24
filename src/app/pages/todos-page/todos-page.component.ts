import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing/data-sharing.service';
import { Task } from "../../models/Tasks";

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  constructor(private dataSharingService: DataSharingService) { }

  tasks = [];
  
  ngOnInit(): void {
    this.tasks = this.dataSharingService.getTasks();
  }

  // getGoals() {
  //   if(localStorage.getItem('goals')===null){
  //     this.goals = [];
  //   }else {
  //     this.goals = JSON.parse(localStorage.getItem('goals'));
  //   }
  // }

  onCompleteButton(task: Task){
    this.dataSharingService.addCompleted(task);
    this.dataSharingService.deleteTask(task);
    location.reload();
  }

  onBacklogButton(task: Task){
    this.dataSharingService.addBacklog(task);
    this.dataSharingService.deleteTask(task);
    location.reload();
  }

  onDeleteButton(task: Task) {
    this.dataSharingService.deleteTask(task);
    location.reload();
  }


}

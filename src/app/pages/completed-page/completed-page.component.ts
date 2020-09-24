import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../../services/data-sharing/data-sharing.service";
import { Task } from "../../models/Tasks";

@Component({
  selector: 'app-completed-page',
  templateUrl: './completed-page.component.html',
  styleUrls: ['./completed-page.component.css']
})
export class CompletedPageComponent implements OnInit {

  constructor(private dataSharingService: DataSharingService) { }

  completed = [];
  
  ngOnInit(): void {
    this.completed = this.dataSharingService.getCompleted();
  }


  onTodoButton(task: Task){
    this.dataSharingService.addTask(task);
    this.dataSharingService.deleteCompleted(task);
    location.reload();
  }

  onBacklogButton(task: Task){
    this.dataSharingService.addBacklog(task);
    this.dataSharingService.deleteCompleted(task);
    location.reload();
  }

  onDeleteButton(task: Task) {
    this.dataSharingService.deleteCompleted(task);
    location.reload();
  }

}

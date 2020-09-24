import { Component, OnInit } from '@angular/core';
import { DataSharingService } from "../../services/data-sharing/data-sharing.service";
import { Task } from "../../models/Tasks";

@Component({
  selector: 'app-backlog-page',
  templateUrl: './backlog-page.component.html',
  styleUrls: ['./backlog-page.component.css']
})
export class BacklogPageComponent implements OnInit {

  backlog = [];

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.backlog = this.dataSharingService.getBacklog();
  }
  

  onTodoButton(task: Task){
    this.dataSharingService.addTask(task);
    this.dataSharingService.deleteBacklog(task);
    location.reload();
  }

  onCompleteButton(task: Task){
    this.dataSharingService.addCompleted(task);
    this.dataSharingService.deleteBacklog(task);
    location.reload();
  }

  onDeleteButton(task: Task) {
    this.dataSharingService.deleteBacklog(task);
    location.reload();
  }

}

import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from "../../models/Tasks";
 

@Injectable()
export class DataSharingService implements OnInit{
    private tasks = [];
    private completed = [];
    private backlog = [];

    ngOnInit(){
      // this.tasks = this.getTasks();
      // this.completed = this.getCompleted();
      // this.backlog = this.getBacklog();
    }

    addTask(post: Task) {
      this.getTasks();
      this.tasks.unshift(post);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getTasks() {
        if(localStorage.getItem('tasks')===null){
          this.tasks = [];
        }else {
          this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return this.tasks;
    }

    deleteTask(task: Task){
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
        var index = this.findTaskIndex(task);
        // console.log(index);
        // console.log(task.name);
        // console.log(task.description);
        this.tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addCompleted(post: Task) {
      this.getCompleted();
      this.completed.unshift(post);
      localStorage.setItem('completed', JSON.stringify(this.completed));
    }

    getCompleted() {
      if(localStorage.getItem('completed')===null){
        this.completed = [];
      }else {
        this.completed = JSON.parse(localStorage.getItem('completed'));
      }
      return this.completed;
    }

  deleteCompleted(task: Task){
    this.completed = JSON.parse(localStorage.getItem('completed'));
    var index = this.findCompletedIndex(task);
    // console.log(index);
    // console.log(completed.name);
    // console.log(completed.description);
    this.completed.splice(index, 1);
    localStorage.setItem('completed', JSON.stringify(this.completed));
  }


  addBacklog(post: Task) {
    this.getBacklog();
    this.backlog.unshift(post);
    localStorage.setItem('backlog', JSON.stringify(this.backlog));
  }

  getBacklog() {
    if(localStorage.getItem('backlog')===null){
      this.backlog = [];
    }else {
      this.backlog = JSON.parse(localStorage.getItem('backlog'));
    }
    return this.backlog;
  }

  deleteBacklog(task: Task){
    this.backlog = JSON.parse(localStorage.getItem('backlog'));
    var index = this.findBacklogIndex(task);
    // console.log(index);
    // console.log(backlog.name);
    // console.log(backlog.description);
    this.backlog.splice(index, 1);
    localStorage.setItem('backlog', JSON.stringify(this.backlog));
  }



  findTaskIndex(task: Task): number{
    var out:number=-1;
    this.tasks.forEach(t => {
      // console.log(t);
      // console.log(task);
      if((t.name == task.name) && (t.description == task.description) ){
        out= this.tasks.indexOf(t);
      }
    });
    return out;
  }

  findCompletedIndex(task: Task): number{
    var out:number=-1;
    this.completed.forEach(t => {
      // console.log(t);
      // console.log(task);
      if((t.name == task.name) && (t.description == task.description) ){
        out= this.completed.indexOf(t);
      }
    });
    return out;
  }

  findBacklogIndex(task: Task): number{
    var out:number=-1;
    this.backlog.forEach(t => {
      // console.log(t);
      // console.log(task);
      if((t.name == task.name) && (t.description == task.description) ){
        out= this.backlog.indexOf(t);
      }
    });
    return out;
  }

    
    
}
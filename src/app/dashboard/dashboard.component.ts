import { Component } from '@angular/core';
import { Todo } from '../model/todo';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // create variables for hold value
  taskObj:any
  taskArr: any
  addTaskData: any
  editTaskData:any

  constructor(private api: TaskService) { }

  ngOnInit(): void {
    this.editTaskData=''
    this.addTaskData=''
    this.taskObj = new Todo()
    this.getAllTask()
    

  }

  // create task data
  addTask() {
    this.taskObj.task=this.addTaskData                               //addTaskData-ngmodel
    this.api.addTask(this.taskObj).subscribe((res) => {
      this.ngOnInit()
    })
  }

  //Get All Task
  getAllTask() {
    this.api.getAllTask().subscribe((res) => {
      this.taskArr = res                                           //ng-model=taskarr
    })
  }

  // Edit Todo Task
  editTask() {
    this.taskObj.task=this.editTaskData
    this.api.editTask(this.taskObj).subscribe((res) => {
      this.ngOnInit()

    })
}

deleteTask(task:any){
  this.api.delete(task).subscribe(res=>{
    this.ngOnInit()
  })
  
}

callEdit(data:any){
  this.taskObj=data
  this.editTaskData=data.task

}




























}



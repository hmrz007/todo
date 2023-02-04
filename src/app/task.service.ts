import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {



  constructor(private http: HttpClient) { }




  addTask(todo: any) {
    return this.http.post('http://localhost:3000/task', todo)
  }

  getAllTask(){
    return this.http.get('http://localhost:3000/task')
  }


  delete(todo: any) {
    return this.http.delete('http://localhost:3000/task' + '/' + todo.id)
  }

  editTask(todo: Todo) {
    return this.http.put('http://localhost:3000/task' +'/'+todo.id, todo)
  }


  // addTask(todo: Todo): Observable<Todo> {
  //   return this.http.post<Todo>(this.baseUrl, todo)
  // }
  // getAllTask():Observable<Todo[]>{
  //   return this.http.get<Todo[]>(this.baseUrl)
  // }

  // delete(todo: Todo): Observable<Todo> {
  //   return this.http.delete<Todo>(this.baseUrl+'/'+todo.id)
  // }

  // editTask(todo: Todo): Observable<Todo> {
  //   return this.http.put<Todo>(this.baseUrl+'/'+todo.id, todo)
  // }






























}

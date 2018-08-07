import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Task } from '../model/task';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';
import { User } from '../model/user';

@Injectable()
export class TasksService {

  private taskListObs = new BehaviorSubject<Array<Task>>([]);
  private userListObs = new BehaviorSubject<Array<User>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getTask().subscribe(list => {
      this.taskListObs.next(list);
    });
    this.httpService.getUsers().subscribe(list =>  {
    this.userListObs.next(list);
  });
  }

  addTask(task: Task) {
    const list = this.taskListObs.getValue();
    const users = this.userListObs.getValue();

    const found = users.some( el => {
      return el.lastname === task.userLastName && el.firstname === task.user;
    });
    if (found) {
      list.push(task);
      this.taskListObs.next(list);
    } else {
      alert('Taki użytkownik nie istnieje w bazie');
    }

  }

  removeTask(task: Task) {
    const list = this.taskListObs.getValue().filter(item => item !== task);
    this.taskListObs.next(list);
  }

  doneTask(task: Task) {
    task.end = new Date().toLocaleString();
    task.isDone = true;
    const list = this.taskListObs.getValue();
    this.taskListObs.next(list);
  }

  getTaskListObs(): Observable<Array<Task>> {
    return this.taskListObs.asObservable();
  }

  saveTaskInDB() {
    this.httpService.saveTask(this.taskListObs.getValue());
  }


}

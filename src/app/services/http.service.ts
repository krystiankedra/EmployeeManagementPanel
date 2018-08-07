import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Task } from '../model/task';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';

@Injectable()
export class HttpService {

readonly URL_DB = 'https://api.mlab.com/api/1/databases/kedraangulardb/collections/tasks';
readonly URL_USERS = 'https://api.mlab.com/api/1/databases/kedraangulardb/collections/users';

readonly param = new HttpParams().set('apiKey' , 'Nro-C514V68OAttvtq0i5lB-NkQv1HJq');

  constructor(private http: HttpClient) {
    this.getTask();
    this.getUsers();
  }

  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.URL_USERS, {params: this.param});
  }

  getTask(): Observable<Array<Task>> {
   return this.http.get<Array<Task>>(this.URL_DB, {params: this.param});
  }


  saveTask(list: Array<Task>) {
    return this.http.put(this.URL_DB, list, {params: this.param})
      .subscribe(data => {
        console.log(data);
      });
  }

  saveUsers(list: Array<User>) {
    return this.http.put(this.URL_USERS, list, {params: this.param}).subscribe(data => {
      console.log(data);
        });
  }

}

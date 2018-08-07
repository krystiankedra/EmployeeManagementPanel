import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

newTaskUserPattern = '^([A-Za-z]{2,35})$';
newTask: string;
newTaskBody: string;
newTaskUser: string;
newTaskUserLastName: string;
userList: Array<User>;
user: User;

  constructor(private taskService: TasksService, private usersService: UsersService) {
  }

  ngOnInit() {
  }

  addTask() {
    const task: Task = ({ name: this.newTask,
      userLastName: this.newTaskUserLastName , user: this.newTaskUser , body: this.newTaskBody, created: new Date().toLocaleString(),
       isDone: false });

        this.taskService.addTask(task);
        this.newTask = '';
        this.newTaskBody = '';
        this.newTaskUser = '';
        this.newTaskUserLastName = '';

  }
}

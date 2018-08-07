import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css'],
})
export class ToDoTaskComponent implements OnInit {

  taskList: Array<Task> = [];
  thList: Array<string> = ['Status' , 'Nazwa użytkownika' , 'Polecenie', 'Data Powstania', 'Usuń' , 'Zakończ' ];

  constructor(private taskService: TasksService) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.taskList = tasks.filter(t => t.isDone === false );
    });
  }

  ngOnInit() {
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  doneTask(task: Task) {
    this.taskService.doneTask(task);
  }

  getColor(): string {
    return this.taskList.length >= 5 ? 'red' : '#800080';
  }

}

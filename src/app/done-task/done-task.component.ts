import { Component, OnInit, Input } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../model/task';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {

  searchText: string;
  selected: Task;
  doneList: Array<Task> = [];

  thList: Array<string> = ['Status', 'Imie|Nazwisko' , 'Polecenie' , 'Utworzenie' , 'Zakonczenie', 'Uwagi', 'Usuń'];

  constructor(private taskService: TasksService,  private modalService: NgbModal) {
    this.taskService.getTaskListObs().subscribe((tasks: Array<Task>) => {
      this.doneList = tasks.filter(t => t.isDone === true);
    });
  }

  ngOnInit() {
  }

  save() {
    this.taskService.saveTaskInDB();
  }


  open(content: any, task: Task) {
    this.modalService.open(content);
    this.selected = task;
    console.log(this.selected);
  }

  c(): void {

  }

  d(): void {

  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

}

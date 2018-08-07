import { Component, OnInit} from '@angular/core';
import { TasksService } from './services/tasks.service';
import { Routes , RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private taskService: TasksService) {
  }



}

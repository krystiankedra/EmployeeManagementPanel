import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Routes , RouterModule } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  searchText: string;
  userList: Array<User> = [];
  selected: User;
  changed: User;
  user: User;
  constructor(private userService: UsersService, private modalService: NgbModal, ) {
    this.userService.getUsersObs().subscribe(userList => this.userList = userList);
  }

  ngOnInit() {
  }

  removeUserC(user: User) {
    this.userService.removeUser(user);
  }

  save() {
    this.userService.saveUsersInDB();
  }

  open(content, user: User) {
    this.modalService.open(content);
    this.selected = user;
  }

  change(content2, user: User) {
    this.modalService.open(content2);
    this.selected = user;
  }

  c(): void {

  }

  d(): void {

  }

}

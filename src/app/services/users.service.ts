import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { User } from '../model/user';

@Injectable()
export class UsersService {


  private userListObs = new BehaviorSubject<Array<User>>([]);

  constructor(private httpService: HttpService) {
    this.httpService.getUsers().subscribe(list => {
      this.userListObs.next(list);
    });
  }

  removeUser(user: User) {
    const list = this.userListObs.getValue().filter(item => item !== user);
    this.userListObs.next(list);
  }

  addUser(user: User) {
    const list = this.userListObs.getValue();
    const found = list.some( el => {
        return el.pesel === user.pesel;
      });
      if (!found) {
        list.push(user);
        this.userListObs.next(list);
      } else {
        alert('Użytkownik istnieje już w bazie');
      }
    }



  getUsersObs(): Observable<Array<User>> {
    return this.userListObs.asObservable();
  }

  saveUsersInDB() {
    this.httpService.saveUsers(this.userListObs.getValue());
  }

}

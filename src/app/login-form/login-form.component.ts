import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpService } from '../services/http.service';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,
    private httpService: HttpService) {
    this.httpService.getUsers().subscribe(list => {
      this.userListObs.next(list);
    });

  }

  showLogin: Boolean = true;
  private userListObs = new BehaviorSubject<Array<User>>([]);


  ngOnInit() {

  }

  loginUser(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    const list = this.userListObs.getValue();
    const found = list.some(element => {
      return element.password === password && element.lastname === username;
    });

    console.log(list)
    if (found) {
      this.loginService.setUserLoggenIn();
      this.router.navigate(['add-task']);
      this.showLogin = false;
    } else {
      alert('Zostały wprowadzone niepoprawne dane');
      this.router.navigate(['/']);
      this.showLogin = true;
    }
  }
}

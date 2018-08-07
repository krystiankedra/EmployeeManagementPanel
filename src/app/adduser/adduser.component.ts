import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  namePattern = '^([A-Za-z]{2,35})$';
  lastNamePattern = '^([A-Za-z]{2,35})$';
  postalCodePattern = '^[0-9]{2}-[0-9]{3}$';
  peselPattern = '^[0-9]{11}$';
  agePattern = '^([0-9]{2,3})';
  countryPattern = '^([A-Za-z]{2,35})$';
  cityPattern = '^([A-Za-z0-9]{2,35})$';
  officePattern = '^([A-Za-z]{2,35})$';


  newUserName: string;
  newUserAge: string;
  newUserOffice: string;
  newUserName2: string;
  newUserPostalCode: string;
  newUserCity: string;
  newUserCountry: string;
  newUserPesel: string;

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  addUser() {
    const user: User = ({ firstname: this.newUserName, lastname: this.newUserName2,
       age: this.newUserAge, office: this.newUserOffice, postalCode: this.newUserPostalCode,
       city: this.newUserCity, country: this.newUserCountry , pesel: this.newUserPesel });
    this.userService.addUser(user);
    this.newUserName = '';
    this.newUserName2 = '';
    this.newUserAge = '';
    this.newUserOffice = '';
    this.newUserPostalCode = '';
    this.newUserCity = '';
    this.newUserCountry = '';
    this.newUserPesel = '' ;
  }

}

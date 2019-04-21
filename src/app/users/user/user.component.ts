import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, User {
  id: number;
  firstName: string;
  lastName: string;

  constructor() { }

  ngOnInit() {
    this.id=1548;
    this.firstName = 'Anastasiia';
    this.lastName = 'Parsaeva';
  }

}

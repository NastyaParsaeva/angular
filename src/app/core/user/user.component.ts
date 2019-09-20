import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, User {
  @Input() public id: number;
  @Input() public firstName: string;
  @Input() public lastName: string;
  @Input() public isAuthentificated: boolean;
  @Output() onLogOutClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
  }

  ngOnInit() {
  }

  handleLogoutClick() {
    this.onLogOutClick.emit();
  }
}

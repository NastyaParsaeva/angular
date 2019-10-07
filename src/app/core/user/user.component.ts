import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() public user: User;
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

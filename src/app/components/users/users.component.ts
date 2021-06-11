import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  @Output()
  liftUserDetails = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value;
    });
  }

  fillUserDetails(userDetails: User) {
    this.liftUserDetails.emit(userDetails);
  }
}

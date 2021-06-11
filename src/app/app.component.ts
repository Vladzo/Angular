import { Component } from '@angular/core';
import {DataTransferService} from "./services";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user: User;
  userDetails: User;

  constructor(private dataTransfer: DataTransferService) {
    dataTransfer.store.subscribe(value => this.user = value.userName);
  }

  setUserDetails(user: User) {
    this.userDetails = user;
  }
}

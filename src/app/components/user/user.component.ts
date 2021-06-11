import {Component, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../models/User";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input()
  user: User

  @Output()
  liftUserDetails = new EventEmitter();

  showUsersDetails() {
    this.liftUserDetails.emit(this.user);
  }
}

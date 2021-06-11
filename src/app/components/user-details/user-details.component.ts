import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {DataTransferService} from "../../services";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  @Input()
  user: User;

  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
  }

  logUser(name: string) {
    this.dataTransfer.store.next({userName: name});
  }
}

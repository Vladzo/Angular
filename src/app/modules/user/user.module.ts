import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import { UserRoutingModule } from './user-routing.module';
import {UsersComponent, UserComponent, UserPostsComponent} from "./components";
import {UserService, UsersResolveService} from "./services";

@NgModule({
  declarations: [UsersComponent, UserComponent, UserPostsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    UsersResolveService
  ]
})
export class UserModule { }

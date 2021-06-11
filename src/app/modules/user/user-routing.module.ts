import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersResolveService} from "./services";
import {UsersComponent, UserPostsComponent} from "./components";

const routes: Routes = [
  {path: '', component: UsersComponent,  resolve: {data: UsersResolveService}},
  {path: ':id/posts', component: UserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

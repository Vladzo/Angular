import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsResolveService} from "./services";
import {PostsComponent, CommentsComponent} from "./components";


const routes: Routes = [
  {path: '', component: PostsComponent, resolve: {data: PostsResolveService}},
  {path: ':id/comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }

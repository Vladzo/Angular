import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostService, PostsResolveService} from "./services";
import {PostComponent, PostsComponent, CommentsComponent} from "./components";

@NgModule({
  declarations: [
    CommentsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    PostsResolveService
  ]
})
export class PostsModule { }

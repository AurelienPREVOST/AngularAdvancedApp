import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { PostsService } from './services/post.service';
import { PostsResolver } from './resolvers/post.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostListItemComponent } from './components/post-list-item/post-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostListComponent,
    PostListItemComponent
  ],
  imports: [
    CommonModule,
    SocialMediaRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService,
    PostsResolver
  ]
})
export class SocialMediaModule { }

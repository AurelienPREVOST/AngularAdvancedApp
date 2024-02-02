import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsResolver } from './resolvers/post.resolver';

const routes: Routes = [
  {path: '', component: PostListComponent, resolve: { posts: PostsResolver }}
  // Quand on accede au path '' avant d'afficher on va appelez le resolver pour recupérer les posts.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }

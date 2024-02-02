import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators'
import { PostsService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts$!: Observable<Post[]>

  constructor(private route: ActivatedRoute,
              private postService: PostsService ) { }

  ngOnInit(): void {
    this.posts$ = this.route.data.pipe(
      map(data => data['posts'])
    );
  }

  onPostCommented(postCommented: {comment: string, postId: number}) {
    //Communique avec le service grâce à l'initialisation dans le constructeur
    this.postService.addNewComment(postCommented)
  }
}
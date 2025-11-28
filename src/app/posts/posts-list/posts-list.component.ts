import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { postsSelector } from '../state/posts.selector';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { deletePost } from '../state/posts.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit{
  posts$: Observable<Post[]>

  constructor(private store : Store<AppState>) {}

  ngOnInit(): void {
    this.posts$ =  this.store.select(postsSelector);
  }

  onDeletePost(id: any): void {
    if (confirm('Are you sure you want to delete the post ?')) {
      this.store.dispatch(deletePost({id}));
    }
  }
}

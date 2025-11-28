import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { Post } from 'src/app/models/posts.model';

export const POSTS_STATE_KEY = 'posts';

const postsFeatureSelector = createFeatureSelector<PostsState>(POSTS_STATE_KEY);

export const postsSelector = createSelector(postsFeatureSelector, (state) => {
  return state.posts;
});

export const postSelectorById = (id: number) => createSelector(postsFeatureSelector, (state) => {
  return state.posts.find((post: Post) => post.id === id);
})

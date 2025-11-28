import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

const postsFeatureSelector = createFeatureSelector<PostsState>('posts');

export const postsSelector = createSelector(postsFeatureSelector, (state) => {
  return state.posts;
});

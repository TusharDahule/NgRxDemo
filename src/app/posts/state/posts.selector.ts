import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { Post } from 'src/app/models/posts.model';

const postsFeatureSelector = createFeatureSelector<PostsState>('posts');

export const postsSelector = createSelector(postsFeatureSelector, (state) => {
  return state.posts;
});

export const postSelectorById = (id: number) => createSelector(postsFeatureSelector, (state) => {
  return state.posts.find((post: Post) => post.id === id);
})

import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const addPost = createAction('[Post] add post', props<{post: Post}>());
export const updatePost = createAction('[Post] update post', props<{post: Post}>());
export const deletePost = createAction('[Post] delete post', props<{id: number}>());

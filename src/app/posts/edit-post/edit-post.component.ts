import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { postSelectorById } from '../state/posts.selector';
import { Post } from 'src/app/models/posts.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit{
  post: Post | undefined;
  postForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        console.log("id: ", id);
        this.store.select(postSelectorById(+id)).subscribe(data => {
          this.post = data;
          this.createForm();
        })
      }
    });
  }

  createForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onUpdatePost(): void {
    const post = {
      id: this.post?.id,
      title: this.postForm.value.title,
      description: this.postForm.value.description
    };

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }

  showDescriptionErrors(): string {
    const descriptionControl = this.postForm.get('description');
    if (descriptionControl?.touched && !descriptionControl.valid) {
      if (descriptionControl.errors?.['required']) {
        return "Description is required";
      }
      else if (descriptionControl.errors?.['minlength']) {
        return "Description should be min 10 characters";
      }
    }
    return "";
  }

}

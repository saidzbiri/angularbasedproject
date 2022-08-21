import { AlbumService } from './../services/album.service';
import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';

import { Component, OnInit } from '@angular/core';
import { timestamp } from 'rxjs/operators';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<any> = [];
  input: HTMLInputElement;

  constructor(private postService: PostService, private albumService: AlbumService) { }

  ngOnInit(): void {
    this.getPosts();
    // this.input.value = 'me';
   // this.createPost(this.input);
   // this.getAlbums();
  }

  getAlbums(): void {
    this.albumService.getAll()
      .subscribe(
        res => {
          this.posts = res;
        });
  }
  getPosts = () => {
    this.postService.getAll()
      .subscribe(res => this.posts = res);
  }

  createPost(input: HTMLInputElement): void {
    const post = { title: 'said' };
    this.posts.splice(0, 0, post);

   // input.value = '';

    this.postService.create(post)
      .subscribe(newPost => {
        post['id'] = newPost.id;
      },
      this.handleError); // Nice :)
  }
  deletePost = (post) => {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    /* this.postService.delete(post.id)
      .subscribe(
        null,
        (err: AppError) => this.handleError(err)); */
    this.postService.delete2(post.id);

  }

  private handleError(err: AppError): void {
    console.log('here');
    if (err instanceof NotFoundError) {
      alert('Posts dont exist');
    } else if (err instanceof BadRequestError) {
      // this.form.setErrors(err);
      alert('Bad request !' + err.originalError);
    } else {
      throw err;
    }
  }
}

import { Component } from '@angular/core';
import { PostInterface } from 'src/app/data/interfaces/post';
import { PostService } from 'src/app/service/post.service';


@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent {

  posts: PostInterface[]=[];
  posts_: PostInterface[]=[];

  constructor(private postService: PostService){}

  ngOnInit(){
    this.getPost()
    this.getPosts()

  }

  getPost(){
    this.postService.getPosts()
      .subscribe(myPosts => this.posts = myPosts)
  }

  getPosts(): void {
    this.postService.getPosts()
      .subscribe(heroes => this.posts_ = heroes.slice(1, 5));
  }
}

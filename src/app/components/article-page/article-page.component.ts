import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInterface } from 'src/app/data/interfaces/post';
import { PostService } from 'src/app/service/post.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent {
  @Input() post!: PostInterface;

  ngOnInit():void{
    this.getPost();
  }

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ){}

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
      .subscribe(myPost => this.post = myPost);

      console.log(this.post)
  }

  goBack(): void {
    this.location.back();
  }
}

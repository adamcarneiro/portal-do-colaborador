import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PostInterface } from '../data/interfaces/post';
import { POSTS } from '../data/mock/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts(): Observable<PostInterface[]>{
    const posts= of(POSTS)
    return posts;
  }

  getPost(id:number):Observable<PostInterface>{
    const post = POSTS.find(p=>p.id == id)!;
    console.log('Serviço',post)
    return of(post)
  }
}

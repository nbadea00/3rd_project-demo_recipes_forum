import { Injectable } from '@angular/core';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  posts: Post[] = []



  async callFetch(){
    let a = await fetch("../assets/post.json")
    .then((response)=> response.json())
    .then((data)=>(this.posts = data ))
    console.log(this.posts)

  }

 /*  getPosts():Post{
 return this.posts
      }

*/
}

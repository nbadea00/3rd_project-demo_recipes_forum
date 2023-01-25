import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interface/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {

  @ViewChild('form',{static: true}) form!: NgForm;

  postInterface = {
    userId:'',
    title:'',
    description:'',
    ingredients:'',
    method:'',
    imgUrl:'',
  }

  constructor(private ps: PostsService, private route: ActivatedRoute, private router: Router) { }

  post!:Post;
  sub: Subscription = new Subscription();
  id:any = 0;

  ngOnInit(): void{
    this.sub = this.ps.getPosts().subscribe((data)=> {
      this.route.params.subscribe((params) => {
        this.post = data.find((post:Post) => post.id == params['id'])
        this.id = params['id'];
        this.postInterface.title = this.post.title;
        this.postInterface.description = this.post.description;
        this.postInterface.ingredients = this.post.ingredients;
        this.postInterface.method = this.post.method;
        this.postInterface.imgUrl = this.post.imgUrl;
      })
    })
  }

  submit():void{
    console.log(this.form.value.formPost.title)

    let data = {
      'userId': 1,
      'title': this.form.value.formPost.title,
      'ingredients': this.form.value.formPost.ingredients,
      'method': this.form.value.formPost.method,
      'description': this.form.value.formPost.description,
      'imgUrl': this.form.value.formPost.imgUrl,
    }
    this.route.params.subscribe((params) =>  this.ps.putPost(params['id'], data).subscribe(data => console.log(data)));

    this.router.navigate(['/posts']);
  }
}

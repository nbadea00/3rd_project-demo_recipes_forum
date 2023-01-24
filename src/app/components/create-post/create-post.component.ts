import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {



  print:boolean = false

  postInterface = {
    title: "",
    post: "",
    image: "",
  }

  @ViewChild('form',{static: true}) form!: NgForm;

  posts:any = []


  userPost:any = {
    name: "",
    title: "",
    post: "",
}

  constructor(private ps: PostsService,private router: Router) { }

  ngOnInit(): void {
  }

  submit(){

    this.print = true;
    console.log(this.form.value.formPost.title)
    this.userPost.title = this.form.value.formPost.title;
    this.userPost.post = this.form.value.formPost.post;

    this.ps.postPost({'userId': 1, 'title': this.userPost.title, 'body': this.userPost.post}).subscribe(data => console.log(data));
    this.router.navigate(['/']);
  }
}

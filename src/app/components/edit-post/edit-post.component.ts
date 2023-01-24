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
    title: "",
    post: "",
    image: "",
  }

  constructor(private ps: PostsService, private route: ActivatedRoute, private router: Router) { }

  post!:Post;
  sub: Subscription = new Subscription();

  ngOnInit(): void{
    this.sub = this.ps.getPosts().subscribe((data)=> {
      this.route.params.subscribe((params) => {
        this.post = data.find((post:Post) => post.id == params['id'])
        this.postInterface.title = this.post.title;
        this.postInterface.post = this.post.body;
      })
    })
  }

  submit():void{
    console.log(this.form.value.formPost.title)

    this.route.params.subscribe((params) =>  this.ps.putPost(params['id'],{'userId': 1, 'title': this.form.value.formPost.title, 'body': this.form.value.formPost.post}).subscribe(data => console.log(data)));

    this.router.navigate(['/']);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseDbService } from 'src/app/service/firebase-db.service';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {



  print:boolean = false

  postInterface = {
    userId:'',
    userName:'',
    title:'',
    description:'',
    ingredients:'',
    method:'',
    imgUrl:'',
  }

  @ViewChild('form',{static: true}) form!: NgForm;

  constructor(private ps: PostsService,private router: Router) { }
  userId: string = '';
  userName:string = '';
  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if(!userJson) return;
    const user = JSON.parse(userJson);
    this.userId = user.uid;
    this.userName = user.displayName;
  }

  img = false;

  imgToggle(){
    this.img = !this.img;
  }

  submit(){

    this.print = true;
    console.log(this.form.value.formPost.title)
    let data = {
      'userId': this.userId,
      'title': this.form.value.formPost.title,
      'ingredients': this.form.value.formPost.ingredients,
      'method': this.form.value.formPost.method,
      'description': this.form.value.formPost.description,
      'imgUrl': this.form.value.formPost.imgUrl,
      'userName': this.userName,
    }

    this.ps.postPost(data).subscribe(data => console.log(data));
    this.router.navigate(['/posts']);
  }
}

import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})

export class EditPostComponent implements OnInit {



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

  constructor() { }

  ngOnInit(): void {
  }

  submit(){

    this.print = true;
    console.log(this.form.value.formPost.title)
    this.userPost.title = this.form.value.formPost.title;
    this.userPost.post = this.form.value.formPost.post;
  }
}

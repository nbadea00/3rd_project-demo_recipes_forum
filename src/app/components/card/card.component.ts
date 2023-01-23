import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Post } from 'src/app/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private notification: NzNotificationService, private router: Router) {}

@Input()post!: Post

  ngOnInit(): void {
    console.log(this.post)
  }

  buttonClick(s:string, id:number) {

    switch (s) {
      case "View":
        this.router.navigate([`/details`, id])
        break;
      case "Edit":
        console.log(s);
        break;
      case "Delete":
        console.log(s);
        break;

    }

  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      "IL POST E' STATO ELIMINATO CON SUCCESSO",
      '',
      {
        nzStyle: {
          width: '450px',
          marginLeft: '-265px'
        },
        nzClass: 'test-class'
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject, Observable, Subject, Subscription, merge, tap } from 'rxjs';
import { Post } from 'src/app/interface/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-dettagli-card',
  templateUrl: './dettagli-card.component.html',
  styleUrls: ['./dettagli-card.component.scss']
})
export class DettagliCardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps: PostsService, private router: Router,private notification: NzNotificationService,) {
  }

  a = 'url("")'
  disabled: boolean = false;

  post!:Post;
  sub: Subscription = new Subscription();
  post$ = new Subject<Post | null>()

  ngOnInit() {
    this.sub = this.ps.getPosts().subscribe((data)=> {
      this.route.params.subscribe((params) => {this.post = data.find((post:Post) => post.id == params['id'])
    this.a = `url("${this.post.imgUrl}")`})
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  buttonClick(data: { a: any; id: number; }) {
    switch (data.a) {
      case 'eye':
        this.router.navigate([`/details`, data.id]);
        break;
      case 'edit':
        this.router.navigate([`/edit`, data.id]);
        break;
      case 'delete':
        this.ps.deletePost(data.id).subscribe(data => {
          console.log(data);
          this.router.navigate([`/posts`]);
          this.createNotification('warning')
        });
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
          marginLeft: '-265px',
        },
        nzClass: 'test-class',
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject, Subscription, merge, tap } from 'rxjs';
import { Post } from 'src/app/interface/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-dettagli-card',
  templateUrl: './dettagli-card.component.html',
  styleUrls: ['./dettagli-card.component.scss']
})
export class DettagliCardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ps: PostsService) {
  }

  post!:Post;
  sub: Subscription = new Subscription();
  post$ = new Subject<Post | null>()

  ngOnInit() {
    this.sub = this.ps.getPosts().subscribe((data)=> {
      this.route.params.subscribe((params) => this.post = data.find((post:Post) => post.id == params['id']))
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}

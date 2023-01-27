import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, combineLatest, count } from 'rxjs';
import { FirebaseDbService } from 'src/app/service/firebase-db.service';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-top-members',
  templateUrl: './top-members.component.html',
  styleUrls: ['./top-members.component.scss'],
})
export class TopMembersComponent implements OnInit,OnDestroy {
  constructor(private fbDb: FirebaseDbService, private ps: PostsService) {}

  posts: any;
  usersId: any = [];
  arr: any = [];
  sub = new Subscription();
  ngOnInit(): void {
    this.sub = combineLatest(
      this.ps.getPosts(),
      this.ps.getAllFav(),
      this.fbDb.get()
    ).subscribe(([posts, fav, users]) => {
      this.usersId = Object.keys(users);

      this.usersId.forEach((user: any) => {
        let postsUser = posts.filter((post: any) => post.userId === user);
        let somm = 0;

          postsUser.forEach((post: any) => {
            let count = fav.filter((fav: any) => fav.postId === post.id).length;
            somm += count;
          });
          if(somm > 0)this.arr.push({ 'user': users[user], 'like': somm });
      });
      this.arr.sort((a: any, b: any) => b.like - a.like);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}

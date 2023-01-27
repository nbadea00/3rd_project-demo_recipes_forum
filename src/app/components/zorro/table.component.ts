import { Component, OnInit } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { Post } from 'src/app/interface/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'nz-demo-table-row-selection-and-operation',
  template: `
  <h1>Ricette</h1>
    <button nz-button nzType="primary" routerLink="/nuovo-post">
      Crea un nuovo post
    </button>
    <div>
      <nz-table
        #rowSelectionTable
        nzShowPagination
        nzShowSizeChanger
        [nzData]="listOfData"
        [nzPageSizeOptions]="[5, 10, 15, 20, 50, 100]"
        [nzPageSize]="5"
        (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
      >
        <thead>
          <tr id="top">
            <th [nzWidth]="'20%'">User</th>
            <th [nzWidth]="'55%'">Title</th>
            <th [nzWidth]="'20%'">Like</th>
          </tr>
        </thead>
        <tbody>
          <tr
            *ngFor="let data of rowSelectionTable.data"
            [routerLink]="['/details', data.post.id]"
            id="bot"
          >
            <td>{{ data.post.userName }}</td>
            <td>{{ data.post.title }}</td>
            <td>
              <span>{{ data.like }} </span>
              <span nz-icon nzType="like" [nzTheme]="'fill'"></span>
            </td>
          </tr>
        </tbody>
      </nz-table>
    </div>
  `,

  styles: [
    ` @import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
      #top {
        font-size: 2em;
        @media only screen and (max-width: 375px) {
          font-size: 1.2em;
        }
      }

      h1{
        font-family: "Satisfy";
        font-weight: bold;
        text-align: center;
        font-size: 85px;
        color: red;
      }

      #bot {
        font-size: 2em;
        @media only screen and (max-width: 375px) {
          font-size: 1em;
        }
      }
      .send-request {
        margin-bottom: 16px;
      }

      .send-request span {
        margin-left: 8px;
      }
      div {
        display: flex;
        justify-content: center;
      }
      nz-table {
        width: 1200px;
      }
    `,
  ],
})
export class NzDemoTableRowSelectionAndOperationComponent implements OnInit {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  setOfCheckedId = new Set<number>();

  constructor(private ps: PostsService) {}

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly any[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter((data) =>
      this.setOfCheckedId.has(data.id)
    );
    console.log(requestData);
    setTimeout(() => {
      this.setOfCheckedId.clear();
      this.loading = false;
    }, 1000);
  }

  sub: Subscription = new Subscription();

  ngOnInit(): void {
    setTimeout(
      () =>
        (this.sub = combineLatest(
          this.ps.getPosts(),
          this.ps.getAllFav()
        ).subscribe(([posts, favs]) => {
          let arr: any[] = [];

          posts.forEach((post: any) => {
            let like = 0;
            like = favs.filter((fav: any) => fav.postId == post.id).length;

            arr.push({ post: post, like: like });
          });

          this.listOfData = arr;
        })),
      2000
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interface/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'nz-demo-table-row-selection-and-operation',
  template: `
  <button nz-button nzType="primary" routerLink="/nuovo-post">Crea un nuovo post</button>
    <div>
      <nz-table
        #rowSelectionTable
        nzShowPagination
        nzShowSizeChanger
        [nzData]="listOfData"
        [nzPageSizeOptions]="[5, 10, 15, 20, 50 , 100]"
        [nzPageSize]="5"
        (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th [nzWidth]="'20%'">Title</th>
            <th [nzWidth]="'55%'">Body</th>
            <th [nzWidth]="'20%'">Acction</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let data of rowSelectionTable.data">
            <td>{{ data.id }}</td>
            <td>{{ data.title }}</td>
            <td>{{ data.body }}</td>
            <td>
              <button
                nz-button
                nzType="primary"
                nzShape="round"
                (click)="a == 'delete' ? createNotification('warning') : null"
                (click)="buttonClick(a, data.id)"
                (click)="$event.stopPropagation()"
                *ngFor="let a of ['eye', 'edit', 'delete']"
              >
              <span nz-icon [nzType]="a" nzTheme="outline"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </nz-table>
    </div>
  `,

  styles: [
    `
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
      nz-table{
        width: 1200px;
      }

      [nz-button] {
        margin-right: 8px;
        margin-bottom: 12px;

        &:nth-child(2) {
          background-color: #178857;
          border: #178857;
        }
        &:nth-child(3) {
          background-color: red;
          border: red;
        }
      }
    `,
  ],
})
export class NzDemoTableRowSelectionAndOperationComponent implements OnInit {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly Post[] = [];
  listOfCurrentPageData: readonly Post[] = [];
  setOfCheckedId = new Set<number>();

  constructor(
    private notification: NzNotificationService,
    private router: Router,
    private ps: PostsService
  ) {}

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly Post[]): void {
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

  buttonClick(s: string, id: number) {
    switch (s) {
      case 'eye':
        this.router.navigate([`/details`, id]);
        break;
      case 'edit':
        this.router.navigate([`/edit`, id]);
        break;
      case 'delete':
        this.ps.deletePost(id).subscribe(data => console.log(data));
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

  sub: Subscription = new Subscription();
  ngOnInit(): void {
   setInterval(()=> this.ps.getPosts().subscribe((data) => this.listOfData = data), 2000);
  }
}

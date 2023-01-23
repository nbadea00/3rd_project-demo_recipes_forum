import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

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
            <th [nzWidth]="'62%'">Body</th>
            <th [nzWidth]="'13%'">Acction</th>
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
                (click)="a == 'Delete' ? createNotification('warning') : null"
                (click)="buttonClick(a, data.id)"
                (click)="$event.stopPropagation()"
                *ngFor="let a of ['View', 'Edit', 'Delete']"
              >
                {{ a }}
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
        max-width: 1200px;
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
    private router: Router
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
      case 'View':
        this.router.navigate([`/details`, id]);
        break;
      case 'Edit':
        console.log(s);
        break;
      case 'Delete':
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
          marginLeft: '-265px',
        },
        nzClass: 'test-class',
      }
    );
  }

  ngOnInit(): void {
    this.listOfData = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
      },
      {
        userId: 1,
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
      },
      {
        userId: 1,
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
      },
      {
        userId: 1,
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
      }
    ];
  }
}

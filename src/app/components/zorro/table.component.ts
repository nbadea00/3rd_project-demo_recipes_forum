import { Component, OnInit } from '@angular/core';
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
            <th [nzWidth]="'20%'">User</th>
            <th [nzWidth]="'55%'">Title</th>
            <th [nzWidth]="'20%'">Acction</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let data of rowSelectionTable.data" [routerLink]="['/details',data.id]">
            <td>{{ data.id }}</td>
            <td>{{ data.title }}</td>
            <td>
              <nz-demo-rate-basic [disabled]="true" [rate]="data.rate"></nz-demo-rate-basic>
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

  constructor(private ps: PostsService) {}

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

  ngOnInit(): void {
    setTimeout(() => this.ps.getPosts().subscribe((data) => this.listOfData = data), 2000)
  }
}

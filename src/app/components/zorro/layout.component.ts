import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-layout-top',
  template: `
    <nz-layout nz-row [ngStyle]="{'height': '100vh'}">
      <nz-header nz-col nzXs="24" [nzMd]="{ order: 1}" [nzOrder]="3" [ngStyle]="{'height': 'auto', 'padding': '0px'}">
        <app-navbar></app-navbar>
      </nz-header>
      <nz-content nz-col nzXs="24" [nzMd]="{ order: 2}" [nzOrder]="1">
        <div class="inner-content">
          <ng-content></ng-content>
        </div>
      </nz-content>
      <nz-footer nz-col nzXs="24" [nzMd]="{ order: 3}" [nzOrder]="2">Ant Design ©2020 Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles: [
    `
      [nz-menu] {
        line-height: auto;
      }
      div{
        height: 100%;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      nz-content {
        padding: 0 50px;
        @media only screen and (max-width:767px) {
          padding: 0 0px;
        }
      }

      nz-footer {
        text-align: center;
      }
      nz-header{
        position: sticky;
        width:100%;
        z-index: 1;
        bottom: 0;
      }

      .inner-content {
        background: #fff;
        padding: 24px;
        min-height: 280px;
      }
    `
  ]
})
export class NzDemoLayoutTopComponent {}

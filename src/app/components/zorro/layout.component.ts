import { Component } from '@angular/core';

@Component({
  selector: 'nz-demo-layout-top',
  template: `
    <nz-layout nz-row>
      <nz-header nz-col nzXs="24" [nzMd]="{ order: 1}" [nzOrder]="3" [ngStyle]="{'height': 'auto', 'padding': '0px'}">
        <app-navbar></app-navbar>
      </nz-header>
      <nz-content nz-col nzXs="24" [nzMd]="{ order: 2}" [nzOrder]="1">
        <div class="inner-content">
          <ng-content></ng-content>
        </div>
      </nz-content>
      <nz-footer nz-col nzXs="24" [nzMd]="{ order: 3}" [nzOrder]="2">EPICOOKING ©2020 Implement By Angular</nz-footer>
    </nz-layout>
  `,
  styles: [
    `
    nz-layout{
      flex-wrap: nowrap;
      min-height:920px;
    }
      [nz-menu] {
        line-height: auto;
      }

      nz-breadcrumb {
        margin: 16px 0;
      }

      nz-content {
        padding: 0 50px;
        height: 100%;
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
        height: 100%;
      }
    `
  ]
})
export class NzDemoLayoutTopComponent {}

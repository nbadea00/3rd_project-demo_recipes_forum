import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CardComponent } from './card.component';
import { DettagliCardComponent } from '../dettagli-card/dettagli-card.component';

@NgModule({
  declarations: [CardComponent,DettagliCardComponent],
  imports: [
    CommonModule,
    NzCollapseModule,
    NzButtonModule,
    NzNotificationModule,
    NzCardModule
  ],
  exports: [CardComponent,DettagliCardComponent]
})
export class CardModule { }

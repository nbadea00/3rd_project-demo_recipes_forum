import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Zorro
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

//Module
import { AuthModule } from './components/auth/auth/auth.module';

//Component
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { NzDemoTableRowSelectionAndOperationComponent } from './components/zorro/table.component';
import { DettagliCardComponent } from './components/dettagli-card/dettagli-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NzDemoRateBasicComponent } from './components/zorro/rate.component';
import { NzDemoButtonSizeComponent } from './components/zorro/button.component';
import { TopMembersComponent } from './components/top-members/top-members.component';
import { NzDemoLayoutTopComponent } from './components/zorro/layout.component';
import { NzDemoCarouselBasicComponent } from './components/zorro/carousel';
import { GalleriaComponent } from './components/galleria/galleria.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    NzDemoLayoutTopComponent,
    NzDemoTableRowSelectionAndOperationComponent,
    DettagliCardComponent,
    NavbarComponent,
    EditPostComponent,
    NzDemoRateBasicComponent,
    NzDemoButtonSizeComponent,
    TopMembersComponent,
    NzDemoCarouselBasicComponent,
    GalleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzGridModule,
    NzMenuModule,
    NzCardModule,
    NzIconModule,
    NzNotificationModule,
    NzRateModule,
    AuthModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzCarouselModule,
    NzAvatarModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}

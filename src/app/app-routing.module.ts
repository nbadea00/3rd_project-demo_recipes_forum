import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliCardComponent } from './components/dettagli-card/dettagli-card.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { NzDemoTableRowSelectionAndOperationComponent } from './components/zorro/table.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { TopMembersComponent } from './components/top-members/top-members.component';
import { NzDemoFormNormalLoginComponent } from './components/auth/login/login/login.component';
import { NzDemoFormValidateReactiveComponent } from './components/auth/signup/signup/signup.component';
import { NzDemoCarouselBasicComponent } from './components/zorro/carousel';
import { AuthGuard } from './components/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NzDemoCarouselBasicComponent
  },
  {
    path: 'posts',
    component: NzDemoTableRowSelectionAndOperationComponent,
  },
  {
    path: 'details/:id',
    component: DettagliCardComponent,
  },{
    path: 'edit/:id',
    component: EditPostComponent,
    canActivate:[AuthGuard]
  },{
    path: 'nuovo-post',
    component: CreatePostComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'top-members',
    component: TopMembersComponent
  },{
    path: 'login',
    component: NzDemoFormNormalLoginComponent
  },{
    path: 'signup',
    component: NzDemoFormValidateReactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliCardComponent } from './components/dettagli-card/dettagli-card.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { NzDemoTableRowSelectionAndOperationComponent } from './components/zorro/table.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    component: NzDemoTableRowSelectionAndOperationComponent,
  },
  {
    path: 'details/:id',
    component: DettagliCardComponent,
  },{
    path: 'edit/:id',
    component: EditPostComponent,
  },{
    path: 'nuovo-post',
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

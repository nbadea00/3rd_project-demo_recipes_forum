import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliCardComponent } from './components/dettagli-card/dettagli-card.component';
import { CardComponent } from './components/card/card.component';
import { ListaPostComponent } from './listaPost/lista-post/lista-post.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPostComponent,
  },
  {
    path: 'details/:id',
    component: DettagliCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

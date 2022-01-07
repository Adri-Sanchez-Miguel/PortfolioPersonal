import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Elements } from './components/elements/elements.component';
import { Ficha } from './components/ficha/ficha.component';
import { Conocimientos } from './components/conocimientos/conocimientos.component';
import { Formacion } from './components/formacion/formacion.component';
import { Main } from './components/main/main.component';

const routes: Routes = [
  { path: '', component: Main },
  { path: 'elemento', component: Elements },
  { path: 'ficha', component: Ficha },
  { path: 'formacion', component: Formacion },
  { path: 'conocimientos', component: Conocimientos },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProduseCautareComponent } from './produse-cautare/produse-cautare.component';
const routes: Routes = [
  {path: 'produseCautare',component:ProduseCautareComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

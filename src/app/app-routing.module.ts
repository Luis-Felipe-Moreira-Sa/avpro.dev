import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// suas rotas vão aqui
const routes: Routes = [
  // exemplos de rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // Importante: exporte o RouterModule aqui!
})
export class AppRoutingModule { }

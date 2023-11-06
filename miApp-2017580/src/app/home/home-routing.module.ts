import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

{
  path: 'productos',
  component: ProductoComponent
},

{
  path: '',
  redirectTo: '/productos',
  pathMatch: 'full'
},

{
  path: 'producto/:id',
  component: ProductoDetalleComponent
},

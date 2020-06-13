import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFountComponent } from './core/not-fount/not-fount.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFountComponent },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((mod) => mod.ShopModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

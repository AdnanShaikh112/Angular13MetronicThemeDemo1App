import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './dashboards/ecommerce/ecommerce.component';

const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: '**', redirectTo: 'products' }
  { path: 'dashboards/default', component: AppComponent },
  { path: 'dashboards/ecommerce', component: EcommerceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

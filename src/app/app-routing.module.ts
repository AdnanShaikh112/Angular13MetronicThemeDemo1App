import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: '**', redirectTo: 'products' }
  { path: 'dashboards/default', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

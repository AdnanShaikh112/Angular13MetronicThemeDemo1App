import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterLink, RouterModule } from '@angular/router';
import { EcommerceComponent } from './dashboards/ecommerce/ecommerce.component';
import { ProjectsComponent } from './dashboards/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

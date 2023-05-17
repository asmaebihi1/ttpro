import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule  } from '@angular/common';

const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  // Define other routes as needed
];
@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

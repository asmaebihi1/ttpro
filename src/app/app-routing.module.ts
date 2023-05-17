import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";

import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";

const routes: Routes = [

  {
   path: 'login',
    component:PageLoginComponent
  },
  {
    path: 'inscrire',
    component:PageInscriptionComponent
  },
 /* {
    path:'',
    component:PageDashboardComponent,
    children: [
      {path: 'articles'}
    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

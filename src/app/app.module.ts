import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageProjetsComponent } from './pages/projets/page-projets/page-projets.component';
import { DetailProjetComponent } from './composants/detail-projet/detail-projet.component';



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageDashboardComponent,
    PageInscriptionComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageProjetsComponent,
    DetailProjetComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

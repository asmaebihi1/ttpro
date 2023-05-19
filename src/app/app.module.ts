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
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelProjetComponent } from './pages/projets/nouvel-projet/nouvel-projet.component';
import { PageMaterielsComponent } from './pages/materiels/page-materiels/page-materiels.component';
import { DetailMaterielComponent } from './composants/detail-materiel/detail-materiel.component';
import { NouvelMaterielComponent } from './pages/materiels/nouvel-materiel/nouvel-materiel.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { DetailMvtStkMaterielComponent } from './composants/detail-mvt-stk-materiel/detail-mvt-stk-materiel.component';
import { DetailMvtStkComponent } from './composants/detail-mvt-stk/detail-mvt-stk.component';



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
    DetailProjetComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelProjetComponent,
    PageMaterielsComponent,
    DetailMaterielComponent,
    NouvelMaterielComponent,
    PageMvtstkComponent,
    DetailMvtStkMaterielComponent,
    DetailMvtStkComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

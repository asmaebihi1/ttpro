import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from "./pages/page-login/page-login.component";

import {PageDashboardComponent} from "./pages/page-dashboard/page-dashboard.component";
import {PageInscriptionComponent} from "./pages/page-inscription/page-inscription.component";
import {PageStatistiquesComponent} from "./pages/page-statistiques/page-statistiques.component";
import {PageProjetsComponent} from "./pages/projets/page-projets/page-projets.component";
import {NouvelProjetComponent} from "./pages/projets/nouvel-projet/nouvel-projet.component";
import {PageMaterielsComponent} from "./pages/materiels/page-materiels/page-materiels.component";
import {NouvelMaterielComponent} from "./pages/materiels/nouvel-materiel/nouvel-materiel.component";
import {PageMvtstkComponent} from "./pages/mvtstk/page-mvtstk/page-mvtstk.component";

const routes: Routes = [

  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'projets',
        component: PageProjetsComponent
      },
      {
        path: 'nouvelprojet',
        component: NouvelProjetComponent
      },
      {
        path: 'materiels',
        component: PageMaterielsComponent
      },
      {
        path: 'nouvelmateriel',
        component: NouvelMaterielComponent
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

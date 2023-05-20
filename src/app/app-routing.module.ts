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
import {PageCollaborateurComponent} from "./pages/collaborateur/page-collaborateur/page-collaborateur.component";
import {PageFournisseurComponent} from "./pages/fournisseur/page-fournisseur/page-fournisseur.component";
import {NouvelCltComponent} from "./composants/nouvel-clt/nouvel-clt.component";
import {NouvelFrsComponent} from "./composants/nouvel-frs/nouvel-frs.component";
import {PageCmdColFrsComponent} from "./pages/page-cmd-col-frs/page-cmd-col-frs.component";

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
      {
        path: 'collaborateurs',
        component: PageCollaborateurComponent
      },
      {
        path: 'projetscollaborateur',
        component: PageCmdColFrsComponent
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path: 'projetsfournisseur',
        component: PageCmdColFrsComponent
      },
      {
        path: 'nouvelcollaborateur',
        component: NouvelCltComponent
      },
      {
        path: 'nouvelfournisseur',
        component: NouvelFrsComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

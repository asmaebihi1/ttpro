import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  public menuProperties: Array<Menu>=[
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fa fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fa fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fa-solid fa-chart-simple',
        url: 'statistiques'
      }
    ]
  },
    {
      id: '2',
      titre: 'Projets',
      icon: 'fa-solid fa-diagram-project',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Projets',
          icon: 'fa-solid fa-diagram-project',
          url: 'projets'
        },
        {
          id: '22',
          titre: 'Progressions projets',
          icon: 'fa-solid fa-arrow-trend-up',
          url: ''
        },

      ]
    },
    {
      id: '3',
      titre: 'Materiels',
      icon: 'fa-solid fa-dolly',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Materiels',
          icon: 'fa-solid fa-dolly',
          url: ''
        },
        {
          id: '32',
          titre: 'Mouvements des stocks',
          icon: 'fa-solid fa-arrow-trend-up',
          url: ''
        },

      ]
    },
    {
      id: '4',
      titre: 'Clients',
      icon: 'fa-solid fa-user-tie',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Clients',
          icon: 'fa-solid fa-user-tie',
          url: ''
        },
        {
          id: '42',
          titre: 'Projets Clients',
          icon: 'fa-solid fa-network-wired',
          url: ''
        }
        ]
    },
    {
      id: '5',
      titre: 'Chefs Projets',
      icon: 'fa-solid fa-user-tie',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Chefs Projets',
          icon: 'fa-solid fa-user-tie',
          url: ''
        },
        {
          id: '52',
          titre: 'Projets Chefs Projets',
          icon: 'fa-solid fa-network-wired',
          url: ''
        }
      ]
    },
    {
      id: '6',
      titre: 'Collaborateurs',
      icon: 'fa-solid fa-users-gear',
      url: '',
      sousMenu: [
        {
          id: '61',
          titre: 'Collaborateurs',
          icon: 'fa-solid fa-users-gear',
          url: ''
        },
        {
          id: '62',
          titre: 'Projets Collaborateurs',
          icon: 'fa-solid fa-network-wired',
          url: ''
        },
        {
          id: '63',
          titre: 'Taches',
          icon: 'fa-solid fa-list-check',
          url: '',
          sousMenu: [
            {
              id: '631',
              titre: 'Taches',
              icon: 'fa-solid fa-list-check',
              url: ''
            },
            {
              id: '632',
              titre: 'Avancements',
              icon: '',
              url: ''
            },
          ]
        }
      ]
    },
    {
      id: '7',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-user-tie',
      url: '',
      sousMenu: [
        {
          id: '71',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-user-tie',
          url: ''
        },
        {
          id: '72',
          titre: 'Projets Fournisseurs',
          icon: 'fa-solid fa-network-wired',
          url: ''
        }
      ]
    },
    {
      id: '8',
      titre: 'Parametrage',
      icon: 'fa-solid fa-gears',
      url: '',
      sousMenu: [
        {
          id: '81',
          titre: 'Categories',
          icon: 'fa-solid fa-boxes-stacked',
          url: ''
        },
        {
          id: '82',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-users',
          url: ''
        }
      ]
    },
  ];
  private expandedIndexes: number[] = [0];

  public isCollapseExpanded(index: number): boolean {
    return this.expandedIndexes.includes(index);
  }

  public toggleCollapse(index: number): void {
    if (this.isCollapseExpanded(index)) {
      this.expandedIndexes = this.expandedIndexes.filter(i => i !== index);
    } else {
      this.expandedIndexes.push(index);
    }}
  constructor(
    private router: Router
  ) {
  }
  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }
}

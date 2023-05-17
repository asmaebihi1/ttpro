import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";

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
    icon: '',
    url: '',
    sousMenu: [
      {
        id: '12',
        titre: 'Vue d\'ensemble',
        icon: '',
        url: ''
      },
      {
        id: '21',
        titre: 'Statistiques',
        icon: '',
        url: ''
      }
    ]
  },
    {
      id: '2',
      titre: 'Projets',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Projets',
          icon: '',
          url: ''
        },
        {
          id: '22',
          titre: 'Progressions projets',
          icon: '',
          url: ''
        },

      ]
    },
    {
      id: '3',
      titre: 'Materiels',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Materiels',
          icon: '',
          url: ''
        },
        {
          id: '32',
          titre: 'Mouvements des stocks',
          icon: '',
          url: ''
        },

      ]
    },
    {
      id: '4',
      titre: 'Clients',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Clients',
          icon: '',
          url: ''
        },
        {
          id: '42',
          titre: 'Projets Clients',
          icon: '',
          url: ''
        }
        ]
    },
    {
      id: '5',
      titre: 'Chefs Projets',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Chefs Projets',
          icon: '',
          url: ''
        },
        {
          id: '52',
          titre: 'Projets Chefs Projets',
          icon: '',
          url: ''
        }
      ]
    },
    {
      id: '6',
      titre: 'Collaborateurs',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '61',
          titre: 'Collaborateurs',
          icon: '',
          url: ''
        },
        {
          id: '62',
          titre: 'Projets Collaborateurs',
          icon: '',
          url: ''
        },
        {
          id: '63',
          titre: 'Taches',
          icon: '',
          url: '',
          sousMenu: [
            {
              id: '631',
              titre: 'Taches',
              icon: '',
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
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '71',
          titre: 'Fournisseurs',
          icon: '',
          url: ''
        },
        {
          id: '72',
          titre: 'Projets Fournisseurs',
          icon: '',
          url: ''
        }
      ]
    },
    {
      id: '8',
      titre: 'Parametrage',
      icon: '',
      url: '',
      sousMenu: [
        {
          id: '81',
          titre: 'Categories',
          icon: '',
          url: ''
        },
        {
          id: '82',
          titre: 'Utilisateurs',
          icon: '',
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
  constructor() {
  }
  ngOnInit(): void {
  }

}

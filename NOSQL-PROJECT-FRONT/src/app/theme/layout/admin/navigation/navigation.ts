import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/dashboard/analytics',
        icon: 'feather icon-home'
      }
    ]
  },
  {
    id: 'etudiant',
    title: 'Etudiant',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'etudiant',
        title: 'Etudiant',
        type: 'item',
        url: '/etudiant',
        icon: 'feather icon-plus'
      }
    ]
  },
  {
    id: 'enseignant',
    title: 'Enseignant',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'enseignant',
        title: 'Enseignant',
        type: 'item',
        url: '/enseignant',
        icon: 'feather icon-plus'
      }
    ]
  },
  {
    id: 'cadres-admin',
    title: 'Cadres Administratifs',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'cadres-admin',
        title: 'Cadres Administratifs',
        type: 'item',
        url: '/cadres-admin',
        icon: 'feather icon-plus'
      }
    ]
  },{
    id: 'gestion-scolarite',
    title: 'Gestion Scolarite',
    type: 'group',
    icon: 'feather icon-layers',
    children: [
      {
        id: 'session',
        title: 'Session',
        type: 'item',
        url: '/gestion-scolarite/session',
        icon: 'feather icon-plus'
      },
      {
        id: 'section',
        title: 'Section',
        type: 'item',
        url: '/gestion-scolarite/section',
        icon: 'feather icon-plus'
      },
      {
        id: 'class',
        title: 'Class',
        type: 'item',
        url: '/gestion-scolarite/class',
        icon: 'feather icon-plus'
      }, {
        id: 'matiere',
        title: 'Matiere',
        type: 'item',
        url: '/gestion-scolarite/matiere',
        icon: 'feather icon-plus'
      }
    ]
  }

];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}

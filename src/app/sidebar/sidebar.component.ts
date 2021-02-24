import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    
    /* { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' }, */
    { path: '/evaluacion-documentaria', title: 'Eval. Documentaria',  icon:'pe-7s-note2', class: '' },
    { path: '/verificacion-fisica', title: 'Verificación Física',  icon:'pe-7s-look', class: '' },
    { path: '/eliminacion-fluidos', title: 'Eliminación Fluidos',  icon:'pe-7s-paint-bucket', class: '' },
    { path: '/desguace-vehicular', title: 'Desguace Vehicular',  icon:'pe-7s-car', class: '' },
    { path: '/compactacion', title: 'Compactación',  icon:'pe-7s-hammer', class: '' },
    { path: '/emision-cdv', title: 'Emisión del CDV',  icon:'pe-7s-copy-file', class: '' },
    /* { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
    { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
    { path: '/dashboard', title: 'Reportes',  icon: 'pe-7s-graph', class: '' }, */
    { path: '/valuacion-documentaria', title: 'Nueva Evaluación',  icon:'pe-7s-add-user', class: 'active-pro' } 
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

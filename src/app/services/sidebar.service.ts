import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sidebar_opciones = [];

  chatarreo_voluntario = [
    {nombre: 'Datos del Vehículo', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Datos del Propietario', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Datos del Solicitante', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Documentos', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Registro Fotográfico', icono: 'pe-7s-graph', url: ''}
  ]
  
  chatarreo_obligatorio = [
    {nombre: 'Datos del Vehículo', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Datos del Solicitante', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Documentos', icono: 'pe-7s-graph', url: ''},
    {nombre: 'Registro Fotográfico', icono: 'pe-7s-graph', url: ''}
  ]

  constructor() { }


}

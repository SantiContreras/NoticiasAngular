import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  
  @Output() parametrosSeleccionados = new EventEmitter<any>()
  //249616ea67a4403985c67f83569348c6

  categoriaSeleccionada='business'
  paisSeleccionado ='br'

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'deport', nombre: 'Deporte' },
    { value: 'salud', nombre: 'Salud' }
  ]

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'fr', nombre: 'francia' },
    { value: 'al', nombre: 'alemania' },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  buscarNoticias(){

    const parametros = {
      categoria:this.categoriaSeleccionada,
      pais:this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(parametros);
  }
}

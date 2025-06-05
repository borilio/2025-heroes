import { Component } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listado-tabla',
  imports: [],
  templateUrl: './listado-tabla.html',
  styleUrl: './listado-tabla.css'
})
export class ListadoTabla {

  // Atributos
  public listadoHeroes: Heroe[];

  // Constructores
  constructor(public heroeService: HeroeService) {
    this.listadoHeroes = this.heroeService.getHeroes();
  }
  
  // Métodos

}

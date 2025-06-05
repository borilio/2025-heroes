import { Component } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-cuerpo',
  imports: [],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo {

  // Atributos
  public listadoHeroes: Heroe[];

  // Constructores
  constructor(public heroeService: HeroeService) {
    this.listadoHeroes = this.heroeService.getHeroes();
  }
  
  // Métodos

}

import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-tarjetas',
  imports: [CommonModule],
  templateUrl: './listado-tarjetas.html',
  styleUrl: './listado-tarjetas.css'
})
export class ListadoTarjetas implements OnInit {
  public heroes: Heroe[];

  constructor(public heroeService: HeroeService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    // La llamada al servicio debería hacerse siempre desde el método ngOnInit, para no hacerlo desde el constructor.
    this.heroes = this.heroeService.getHeroes();
  }

}

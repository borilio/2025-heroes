import { Component } from '@angular/core';

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
  constructor() {
    this.listadoHeroes = [
      {
        nombre: "Superman",
        imagen: "",
        honor: 95,
        ataque: 80,
        defensa: 93,
        poder: 350,
        vida: 100
      },
      {
        nombre: "Batman",
        imagen: "",
        honor: 80,
        ataque: 60,
        defensa: 75,
        poder: 100,
        vida: 100
      },
      {
        nombre: "Spiderman",
        imagen: "",
        honor: 90,
        ataque: 86,
        defensa: 89,
        poder: 150,
        vida: 100
      },
      {
        nombre: "Linterna Verde",
        imagen: "",
        honor: 90,
        ataque: 82,
        defensa: 83,
        poder: 200,
        vida: 100
      },
      {
        nombre: "Ironman",
        imagen: "",
        honor: 82,
        ataque: 83,
        defensa: 85,
        poder: 150,
        vida: 100
      },
      {
        nombre: "Capitán America",
        imagen: "",
        honor: 98,
        ataque: 64,
        defensa: 95,
        poder: 135,
        vida: 100
      },
      {
        nombre: "Thor",
        imagen: "",
        honor: 75,
        ataque: 92,
        defensa: 75,
        poder: 275,
        vida: 100
      }
    ];
    // this.listadoHeroes = []; // Para probar a enviar el array vacío
  }

  // Métodos




}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  // Atributos

  // Constructores
  constructor() { }

  // Métodos
  public getHeroes(): Heroe[] {
    const listadoHeroes: Heroe[] = [
      {
        "nombre": "Superman",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/superman.svg",
        "ataque": 80,
        "defensa": 93,
        "poder": 350,
        "honor": 94,
        "vida": 100
      },
      {
        "nombre": "Batman",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/batman.svg",
        "ataque": 60,
        "defensa": 75,
        "poder": 50,
        "honor": 75,
        "vida": 100
      },
      {
        "nombre": "Capitana Marvel",
        "imagen": "",
        "ataque": 79,
        "defensa": 80,
        "poder": 300,
        "honor": 70,
        "vida": 100
      },
      {
        "nombre": "Catwoman",
        "imagen": "",
        "ataque": 63,
        "defensa": 72,
        "poder": 50,
        "honor": -5,
        "vida": 100
      },
      {
        "nombre": "Spiderman",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/spiderman.svg",
        "ataque": 86,
        "defensa": 89,
        "poder": 150,
        "honor": 85,
        "vida": 100
      },
      {
        "nombre": "Viuda Negra",
        "imagen": "",
        "ataque": 88,
        "defensa": 83,
        "poder": 35,
        "honor": 37,
        "vida": 50
      },
      {
        "nombre": "Thanos",
        "imagen": "",
        "ataque": 90,
        "defensa": 95,
        "poder": 250,
        "honor": -92,
        "vida": 25
      },
      {
        "nombre": "Linterna Verde",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/linternaverde.svg",
        "ataque": 82,
        "defensa": 83,
        "poder": 200,
        "honor": 80,
        "vida": 100
      },
      {
        "nombre": "Ironman",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/ironman.svg",
        "ataque": 83,
        "defensa": 85,
        "poder": 150,
        "honor": 69,
        "vida": 100
      },
      {
        "nombre": "Capitán America",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/capitanamerica.svg",
        "ataque": 64,
        "defensa": 95,
        "poder": 135,
        "honor": 95,
        "vida": 100
      },
      {
        "nombre": "Thor",
        "imagen": "",
        "ataque": 92,
        "defensa": 75,
        "poder": 275,
        "honor": 60,
        "vida": 100
      },
      {
        "nombre": "Aquaman",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/aquaman.svg",
        "ataque": 89,
        "defensa": 76,
        "poder": 150,
        "honor": 89,
        "vida": 100
      },
      {
        "nombre": "Arrow",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/arrow.svg",
        "ataque": 77,
        "defensa": 71,
        "poder": 50,
        "honor": 70,
        "vida": 100
      },
      {
        "nombre": "Ciclope",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/ciclope.svg",
        "ataque": 83,
        "defensa": 78,
        "poder": 190,
        "honor": 85,
        "vida": 100
      },
      {
        "nombre": "Daredevil",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/daredevil.svg",
        "ataque": 86,
        "defensa": 90,
        "poder": 53,
        "honor": 71,
        "vida": 100
      },
      {
        "nombre": "Flash",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/flash.svg",
        "ataque": 78,
        "defensa": 92,
        "poder": 170,
        "honor": 87,
        "vida": 100
      },
      {
        "nombre": "Hulk",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/hulk.svg",
        "ataque": 91,
        "defensa": 56,
        "poder": 198,
        "honor": 60,
        "vida": 100
      },
      {
        "nombre": "Lobezno",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/lobezno.svg",
        "ataque": 91,
        "defensa": 56,
        "poder": 189,
        "honor": 75,
        "vida": 100
      },
      {
        "nombre": "Mr. Fantástico",
        "imagen": "https://borilio.github.io/curso-angular/img/avatars/mrfantastico.svg",
        "ataque": 67,
        "defensa": 87,
        "poder": 145,
        "honor": 78,
        "vida": 100
      },
      {
        "nombre": "Señor Pepino",
        "imagen": "https://image.freepik.com/vector-gratis/pepino-superheroe_87946-182.jpg",
        "ataque": 3,
        "defensa": 2,
        "poder": 1,
        "honor": 99,
        "vida": 98
      }
    ];
    // listadoHeroes = [];
    return listadoHeroes;
  }


}

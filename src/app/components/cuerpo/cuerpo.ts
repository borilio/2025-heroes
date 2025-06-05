import { Component } from '@angular/core';
import { ListadoTabla } from "../listado-tabla/listado-tabla";
import { ListadoTarjetas } from "../listado-tarjetas/listado-tarjetas";
import { Home } from "../home/home";

@Component({
  selector: 'app-cuerpo',
  imports: [ListadoTabla, ListadoTarjetas, Home],
  templateUrl: './cuerpo.html',
  styleUrl: './cuerpo.css'
})
export class Cuerpo {

}
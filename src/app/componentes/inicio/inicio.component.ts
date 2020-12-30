import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  logo1Celular = 'assets/imagenes/ValleHermoso/logo_centro_1_celular.png';
  logo2Celular = 'assets/imagenes/ValleHermoso/logo_centro_2_celular.png';
  logo1Pc = 'assets/imagenes/ValleHermoso/logo_centro_1_pc.png';
  logo2Pc = 'assets/imagenes/ValleHermoso/logo_centro_2_pc.png';

  constructor() { }

  ngOnInit(): void {
  }

}

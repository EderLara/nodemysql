import { Component, OnInit } from '@angular/core';
// Importamos librerias necesarias para la captura y enrutamiento de los datos del formulario:
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public imglogin;
  public year = new Date();
  // Para capturar los datos del formulario:
  logForm : FormGroup;
  constructor(
    // Configuramos variables privadas para el acceso de router:
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.imglogin  = 'assets/pictures/ok.png';
    // Constructor de los datos del formulario:
    this.logForm = new FormGroup({
      'user': new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'pass': new FormControl('', [Validators.required, Validators.minLength(5)])
    });
   }

  ngOnInit() {
  }

}

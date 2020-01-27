import { Component, OnInit } from '@angular/core';
// Librerias para el manejo de formularios:
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  // Variables del sistema:
  // Para capturar los datos del formulario:
  regUser: FormGroup;
  public registroimg;
  public description;
  constructor(
    // Configuramos variables privadas para el acceso de router:
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    // Constructor de formulario para registro de usuario:
    this.regUser = new FormGroup({
      'usuario': new FormControl('', Validators.required),
      'contrasena': new FormControl('', Validators.required),
      'nombre': new FormControl('', Validators.required),
      'cedula': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      'administrador': new FormControl('', Validators.required),
    });
    // Variables de la vista:
    this.registroimg = 'assets/pictures/ok.png';
    this.description = 'lorem ipsum';
   }

  ngOnInit() {
  }
  // Funcion para registro de usuario:
  regUsuario(){
    console.log( this.regUser.value );
  }
}

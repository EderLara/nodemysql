import { Component, OnInit } from '@angular/core';
// Importamos librerias necesarias para la captura y enrutamiento de los datos del formulario:
import { Router, ActivatedRoute, Params } from '@angular/router';
// Importamos la interfaz:
import { User } from '../../interface/user.interface';
// Importamos los servicios:
import { LoginService } from '../../servicios/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [LoginService]
})
export class InicioComponent implements OnInit {

  public imglogin;
  public year = new Date();
  public role;
  public usuario;
  public session;

  // variable de interfaz para capturar los datos del formulario:
  user:User = {
    usuario:"",
    contrasena:"",
    nombre:"",
    cedula:"",
    email:""
}
  // Para capturar los datos del formulario:
  
  constructor(
    // Configuramos variables privadas para el acceso de router:
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) {
    this.imglogin  = 'assets/pictures/ok.png';
   }

  ngOnInit() {
  }
  // Funciones de login:
  ingreso(data): void {
    // Mostramos en consola que valores obtenemos:
    // console.log(this.logForm.value);
    // Pasamos los valores del formulario al servicio:
  
    this._loginService.login(data.value).subscribe( res =>{
      this.role = res.usuario;
      console.log(this.role);
      if (!this.role) {
        this.session = 'Error de Sessión';
      } else {
        this.session = 'logueado';
        localStorage.setItem('usuario', JSON.stringify(this.role));
        console.log(this.session);
      }
    },
    error =>{
      let errMsg = <any>error;
      console.log(errMsg);
      if (errMsg != null) {
        this.session = 'Error de suscripción';
      }
    });
  }
}

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
  public perfil;
  public tipouser;
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
    // Pasamos los valores del formulario al servicio:
    this.role = data.value;
    this._loginService.login(this.role).subscribe( res =>{

      if (res.Usuario) {
        this.perfil = res.Usuario;
        this.session = 'logueado';
        // Almacenamos en el dispositivo los datos obtenidos:
        localStorage.setItem('usuario', JSON.stringify(this.perfil));
        // Almacenamos el tipo de perfil:
        this.tipouser = this.perfil.Administrador;
        this._loginService.getRol(this.tipouser);
        console.log(this.perfil);
        console.log(this.tipouser);
      } else { 
        this.session = 'Error de Sessión';
      }
      // Despues de obtener respuesta del back, navegar a la página siguiente:
      switch (this.tipouser) {
        case '1':
          return this.perfil;
          console.log('Usuario Administrador');
          break;
        case '0':
          return this.perfil;
          console.log('Usuario Administrador');
          break;

        default:
          console.log(this.session);
          break;
      }
      // Ya capturado podemos navegar a la página de reportes y realizar las operaciones según l usuario:
      this._router.navigate(['/reportes']);
    },
    error =>{
      let errMsg = <any>error;
      console.log(errMsg);
      if (errMsg != null) {
        this.session = 'Error de suscripción';
      }
    });
    this.session = 'Error';
    console.log(this.session);
  }
}

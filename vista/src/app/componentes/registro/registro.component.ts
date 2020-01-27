import { Component, OnInit } from '@angular/core';
// Librerias para el manejo de formularios:
import { Router, ActivatedRoute, Params } from '@angular/router';
// Importamos la interfaz:
import { User } from '../../interface/user.interface';
// Importamos los servicios:
import { LoginService } from '../../servicios/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  // Variables del sistema:
  public userNew;
  public status;
  // variable de interfaz para capturar los datos del formulario:
  user:User = {
      usuario:"",
      contrasena:"",
      nombre:"",
      cedula:"",
      email:"",
      administrador:0
  }
  public registroimg;
  public description;
  constructor(
    // Configuramos variables privadas para el acceso de router:
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) { 
    // Variables de la vista:
    this.registroimg = 'assets/pictures/ok.png';
    this.description = 'lorem ipsum';
   }

  ngOnInit() {
  }
  // Funcion para registro de usuario:
  regUsuario(usuario): void{
    this.userNew = usuario.value;
    console.log(this.userNew);
    this._loginService.registro(this.userNew).subscribe( res =>{
      if (res) {
        this.status = 'Usuario Almacenado';
        this._router.navigate(['/login']);
      }else {
        this.status = 'Error';
      }
      console.log(this.status);
    });
  }
}

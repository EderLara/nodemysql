import { Component, OnInit } from '@angular/core';
// Librerias para el manejo de formularios:
import { Router, ActivatedRoute, Params } from '@angular/router';
// Importamos la interfaz:
import { User } from '../../interface/user.interface';
// Importamos los servicios:
import { LoginService } from '../../servicios/user.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
    // Variables de la clase:
    public perfil;
    public usuarios;
    // variable de interfaz para capturar los datos del formulario:
    user:User = {
      usuario:"",
      contrasena:"",
      nombre:"",
      cedula:"",
      email:""
  }
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _loginService: LoginService
  ) { 
    
   }

  ngOnInit() {
    // Manejo de Sessiones:
    this.perfil = this._loginService.getSession();
    console.log(this.perfil);
    this.getUsers();
  }

  getUsers() {
    this._loginService.getUsers().subscribe( res =>{
      if (res) {
        this.usuarios = res;
        console.log(this.usuarios);
      } else {
        console.log('no se puede observar ningun usuario en la base de datos');
      }
    }
    );
  }
  

}

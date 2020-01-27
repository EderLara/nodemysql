// Importamos las librerias necesarias para el adecuado manejo de los controles:
import { Injectable } from '@angular/core'; // importamo la Interfaz del nucleo de Angular,
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Las cabeceras http de cliente y de la aplicacion. 
import { Observable } from 'rxjs'; // El iterador de objetos
import { GLOBAL } from './srcglobal.service';
import { User } from '../interface/user.interface';


@Injectable()
// Clase para el inicio de sesión
export class LoginService{
    // Variables globales de la clase loginService:
    public url: string;
    public role;
    public perfil;
    // variable de interfaz:
    user:User = {
        usuario:"",
        contrasena:"",
        nombre:"",
        cedula:"",
        email:""
    }
    // Constructor del servicio:
    constructor(
        // En el constructor vamos a pasar los métodos aceptados por el protocolo http, los ponemos en una variable para que podamos invocarlos en las funciones siguientes:
        public _http: HttpClient
    ){
        // Dentro del constructor, pasamos la url de la api, puesto que es allí donde se ejecutan los controles:
        this.url = GLOBAL.url;
    }
    // ----------------- Funciones de test.service:  ----------------- \\
    //  Función de login:
    login(usuario): Observable<any>{
        let params = JSON.stringify(usuario);
        console.log(params);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'/ingreso', params, {headers: headers});
    }
    // Función de Identifación de Rol:
    getRol() {
        let role =JSON.parse(localStorage.getItem('Usuario'));
        if (role != undefined) {
            this.role = role;
            this.perfil = this.role.administrador;
            console.log(this.perfil);
        }else {
            this.role = null;
        }
        return this.role;
    }
}
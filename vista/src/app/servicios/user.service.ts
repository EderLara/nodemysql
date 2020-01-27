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
    login(usuario: User): Observable<any>{
        let params = JSON.stringify(usuario);
        console.log(params);
        console.log(this.url);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'/ingreso', params, {headers: headers});                        
    }
    // Registro de usuario:
    registro(usuario: User): Observable<any>{
        let params = JSON.stringify(usuario);
        console.log(this.url);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'/guardar', params, {headers: headers});    
    }
}
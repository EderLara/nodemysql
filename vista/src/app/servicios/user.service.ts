// Importamos las librerias necesarias para el adecuado manejo de los controles:
import { Injectable } from '@angular/core'; // importamo la Interfaz del nucleo de Angular,
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Las cabeceras http de cliente y de la aplicacion. 
import { Observable } from 'rxjs'; // El iterador de objetos
import { GLOBAL } from './srcglobal.service';
// import { Test } from '../modelo/user.model';


@Injectable()
// Clase para el inicio de sesión
export class LoginService{
    // Variables globales de la clase loginService:
    public url: string;
    public rol;
    
    // Constructor del servicio:
    constructor(
        // En el constructor vamos a pasar los métodos aceptados por el protocolo http, los ponemos en una variable para que podamos invocarlos en las funciones siguientes:
        public _http: HttpClient
    ){
        // Dentro del constructor, pasamos la url de la api, puesto que es allí donde se ejecutan los controles:
        this.url = GLOBAL.url;
    }
    // ----------------- Funciones de test.service:  ----------------- \\

}
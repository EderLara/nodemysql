import { Component, OnInit } from '@angular/core';
// Librerias para el manejo de formularios:
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    
   }

  ngOnInit() {
  }

}

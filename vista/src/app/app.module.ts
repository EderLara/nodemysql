import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Componentes externos como FormsModule para el manejo de formularios:
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';
// Importamos los servicios:
import { LoginService } from './servicios/user.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistroComponent,
    ReportesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

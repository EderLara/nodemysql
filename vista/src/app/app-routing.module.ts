import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importamos los componentes:
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReportesComponent } from './componentes/reportes/reportes.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { CrearMembresiaComponent } from './components/membresia/crear-membresia/crear-membresia.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';

const routes: Routes = [
  {
    path: 'membresias',component: MembresiaComponent,children: [ //cambio de rutas 
      { path: 'nuevo', component: CrearMembresiaComponent }, //registrar
      { path: 'lista', component: ListarMembresiaComponent }, //listar
      { path: 'ediciones/:id', component: CrearMembresiaComponent }, //actualizar


    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

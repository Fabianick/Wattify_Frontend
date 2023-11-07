import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { CrearMembresiaComponent } from './components/membresia/crear-membresia/crear-membresia.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';
import { UsersComponent } from './components/users/users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { TdispositivoComponent } from './components/tdispositivo/tdispositivo.component';
import { CreaeditaDispositivoComponent } from './components/tdispositivo/creaedita-dispositivo/creaedita-dispositivo.component';
import { ListarDispositivoComponent } from './components/tdispositivo/listar-dispositivo/listar-dispositivo.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { CreaeditaDispositivosComponent } from './components/dispositivos/creaedita-dispositivos/creaedita-dispositivos.component';
import { ListarDispositivosComponent } from './components/dispositivos/listar-dispositivos/listar-dispositivos.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsersComponent,
    children:[
      { path: 'nuevo', component: CreaeditaUsersComponent },
      { path: 'ediciones/:id', component: CreaeditaUsersComponent },
    ]
  },
  {
    path: 'membresias',component: MembresiaComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CrearMembresiaComponent }, //registrar
      { path: 'lista', component: ListarMembresiaComponent }, //listar
      { path: 'ediciones/:id', component: CrearMembresiaComponent }, //actualizar


    ],
  },
  {
    path: 'Tdispositivo',component: TdispositivoComponent,children: [
      { path: 'nuevo', component: CreaeditaDispositivoComponent }, //registrar
      { path: 'lista', component: ListarDispositivoComponent }, //listar
      { path: 'ediciones/:id', component: CreaeditaDispositivoComponent }, //listar
    ],
  },

  {
    path: 'dispositivos',component: DispositivosComponent,children: [
      { path: 'nuevo', component: CreaeditaDispositivosComponent }, //registrar
      { path: 'lista', component: ListarDispositivosComponent }, //listar
      { path: 'ediciones/:id', component: CreaeditaDispositivosComponent }, //listar
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

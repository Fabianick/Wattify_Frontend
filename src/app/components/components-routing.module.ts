import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreaeditaUsersComponent } from './users/creaedita-users/creaedita-users.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { CrearMembresiaComponent } from './membresia/crear-membresia/crear-membresia.component';
import { ListarMembresiaComponent } from './membresia/listar-membresia/listar-membresia.component';
import { TdispositivoComponent } from './tdispositivo/tdispositivo.component';
import { CreaeditaDispositivoComponent } from './tdispositivo/creaedita-dispositivo/creaedita-dispositivo.component';
import { ListarDispositivoComponent } from './tdispositivo/listar-dispositivo/listar-dispositivo.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { CreaeditaDispositivosComponent } from './dispositivos/creaedita-dispositivos/creaedita-dispositivos.component';
import { ListarDispositivosComponent } from './dispositivos/listar-dispositivos/listar-dispositivos.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { CrearMetodoPagoComponent } from './metodo-pago/crear-metodo-pago/crear-metodo-pago.component';
import { ListarMetodoPagoComponent } from './metodo-pago/listar-metodo-pago/listar-metodo-pago.component';
import { GuardService } from '../services/guard.service';


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
      { path: 'nuevo', component: CreaeditaDispositivoComponent,canActivate: [GuardService],
      data: { 'requiredRole': 'ADMIN' } }, //registrar
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
  },
  {
    path: 'metodo-pago',component: MetodoPagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CrearMetodoPagoComponent }, //registrar
      { path: 'lista', component: ListarMetodoPagoComponent}, //listar
      { path: 'ediciones/:id', component: CrearMetodoPagoComponent }, //actualizar
    ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

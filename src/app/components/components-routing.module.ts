import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreaeditaUsersComponent } from './users/creaedita-users/creaedita-users.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { CrearMembresiaComponent } from './membresia/crear-membresia/crear-membresia.component';
import { TdispositivoComponent } from './tdispositivo/tdispositivo.component';
import { CreaeditaDispositivoComponent } from './tdispositivo/creaedita-dispositivo/creaedita-dispositivo.component';
import { ListarDispositivoComponent } from './tdispositivo/listar-dispositivo/listar-dispositivo.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { CreaeditaDispositivosComponent } from './dispositivos/creaedita-dispositivos/creaedita-dispositivos.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { CrearMetodoPagoComponent } from './metodo-pago/crear-metodo-pago/crear-metodo-pago.component';
import { ListarMetodoPagoComponent } from './metodo-pago/listar-metodo-pago/listar-metodo-pago.component';
import { GuardService } from '../services/guard.service';
import { LoginComponent } from './login/login.component';
import { ComprobantePagoComponent } from './comprobante-pago/comprobante-pago.component';
import { ListarComprobantesComponent } from './comprobante-pago/listar-comprobantes/listar-comprobantes.component';
import { CreaeditaComprobantesComponent } from './comprobante-pago/creaedita-comprobantes/creaedita-comprobantes.component';
import { DetallePagoComponent } from './detalle-pago/detalle-pago.component';
import { CreaeditaDetallesComponent } from './detalle-pago/creaedita-detalles/creaedita-detalles.component';
import { ListarDetallesComponent } from './detalle-pago/listar-detalles/listar-detalles.component';


const routes: Routes = [
  {
    path: 'usuarios',
    component: UsersComponent,
    children:[
      { path: 'nuevo', component: CreaeditaUsersComponent },
      { path: 'ediciones/:id', component: CreaeditaUsersComponent },
    ],canActivate: [GuardService],
    data: { 'requiredRole': 'ADMIN' }
  },
  {
    path: 'membresias',
    component: MembresiaComponent,
    children: [ //cambio de rutas
    { path: 'nuevo', component: CrearMembresiaComponent}, //registrar
      //{ path: 'nuevo', component: CrearMembresiaComponent ,canActivate: [GuardService],
      //data: { 'requiredRole': 'ADMIN' } }, //registrar
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
      //{ path: 'lista', component: ListarDispositivosComponent }, //listar
      { path: 'ediciones/:id', component: CreaeditaDispositivosComponent }, //listar
    ],
  },
  {
    path: 'metodo-pago',component: MetodoPagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CrearMetodoPagoComponent }, //registrar
      { path: 'lista', component: ListarMetodoPagoComponent}, //listar
      { path: 'ediciones/:id', component: CrearMetodoPagoComponent }, //actualizar
    ],
  },
  {
    path: 'comprobante-pago',component: ComprobantePagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CreaeditaComprobantesComponent }, //registrar
      { path: 'lista', component: ListarComprobantesComponent}, //listar
      { path: 'ediciones/:id', component: CreaeditaComprobantesComponent }, //actualizar
    ],
  },
  {
    path: 'detalle-pago',component: DetallePagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CreaeditaDetallesComponent }, //registrar
      { path: 'lista', component: ListarDetallesComponent}, //listar
      { path: 'ediciones/:id', component: CreaeditaDetallesComponent }, //actualizar
    ],
  },
  {
    path:'login',component: LoginComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

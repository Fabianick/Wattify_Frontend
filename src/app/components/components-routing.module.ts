import { NgModule, Component } from '@angular/core';
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
import { ListarDispositivosComponent } from './dispositivos/listar-dispositivos/listar-dispositivos.component';
import { RolesComponent } from './roles/roles.component';
import { CreaeditaRolesComponent } from './roles/creaedita-roles/creaedita-roles.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { ReporteconsumototaldehorasComponent } from './reporte/reporteconsumototaldehoras/reporteconsumototaldehoras.component';
import { ReporteusersmembresiamontorecaudadoComponent } from './reporte/reporteusersmembresiamontorecaudado/reporteusersmembresiamontorecaudado.component';
import { ReportecantidadbyusuarioComponent } from './reporte/reportecantidadbyusuario/reportecantidadbyusuario.component';
import { ReportesumaxmetedopagoComponent } from './reporte/reportesumaxmetedopago/reportesumaxmetedopago.component';


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
    path: 'roles',
    component: RolesComponent,
    children:[
      { path: 'nuevo', component: CreaeditaRolesComponent },
      { path: 'ediciones/:id', component: CreaeditaRolesComponent },
    ],canActivate: [GuardService],
    data: { 'requiredRole': 'ADMIN' }
  },
  {
    path: 'membresias',
    component: MembresiaComponent,
    children: [ //cambio de rutas
    { path: 'nuevo', component: CrearMembresiaComponent,canActivate: [GuardService],
    data: { 'requiredRole': 'ADMIN' }}, //registrar
      { path: 'ediciones/:id', component: CrearMembresiaComponent }, //actualizar
    ]
  },

  {
    path: 'Tdispositivo',component: TdispositivoComponent,children: [
      { path: 'nuevo', component: CreaeditaDispositivoComponent,canActivate: [GuardService],
      data: { 'requiredRole': 'ADMIN' } }, //registrar
      { path: 'ediciones/:id', component: CreaeditaDispositivoComponent }, //listar
    ]
  },

  {
    path: 'reportes', component:ReporteComponent, children:[
      {
        path: 'reporte-consumo-total-horas', component: ReporteconsumototaldehorasComponent
      },
      {
        path: 'reporte-users-membresias-monto', component: ReporteusersmembresiamontorecaudadoComponent
      },
      {
        path: 'reporte-cantidad-users', component: ReportecantidadbyusuarioComponent
      },
      {
        path: 'reporte-suma-x-metodo-pago', component: ReportesumaxmetedopagoComponent
      }
    ]  //VALIDAR   //VALIDAR

  },
  {
    path: 'chatgpt', component:ChatgptComponent,

  },

  {
    path: 'dispositivos',component: DispositivosComponent,children: [
      { path: 'nuevo', component: CreaeditaDispositivosComponent,canActivate: [GuardService],
      data: { 'requiredRole': 'ADMIN' } }, //registrar
      { path: 'ediciones/:id', component: CreaeditaDispositivosComponent }, //listar
    ]
  },
  {
    path: 'metodo-pago',component: MetodoPagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CrearMetodoPagoComponent,canActivate: [GuardService],
      data: { 'requiredRole': 'USER' } }, //registrar
      { path: 'ediciones/:id', component: CrearMetodoPagoComponent }, //actualizar
    ]
  },
  {
    path: 'comprobante-pago',component: ComprobantePagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CreaeditaComprobantesComponent,canActivate: [GuardService],
      data: { 'requiredRole': 'ADMIN' } }, //registrar
      { path: 'ediciones/:id', component: CreaeditaComprobantesComponent }, //actualizar
    ]
  },
  {
    path: 'detalle-pago',component: DetallePagoComponent,children: [ //cambio de rutas
      { path: 'nuevo', component: CreaeditaDetallesComponent,canActivate: [GuardService],
      data: { 'requiredRole': 'ADMIN' } }, //registrar
      { path: 'ediciones/:id', component: CreaeditaDetallesComponent }, //actualizar
    ]
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

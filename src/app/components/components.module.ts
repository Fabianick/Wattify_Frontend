import { CreaeditaDetallesComponent } from './detalle-pago/creaedita-detalles/creaedita-detalles.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { CrearMembresiaComponent } from './membresia/crear-membresia/crear-membresia.component';
import { MembresiaComponent } from './membresia/membresia.component';
import { ListarMembresiaComponent } from './membresia/listar-membresia/listar-membresia.component';
import { UsersComponent } from './users/users.component';
import { ListarUsersComponent } from './users/listar-users/listar-users.component';
import { CreaeditaUsersComponent } from './users/creaedita-users/creaedita-users.component';
import { TdispositivoComponent } from './tdispositivo/tdispositivo.component';
import { ListarDispositivoComponent } from './tdispositivo/listar-dispositivo/listar-dispositivo.component';
import { CreaeditaDispositivoComponent } from './tdispositivo/creaedita-dispositivo/creaedita-dispositivo.component';
import { DispositivosComponent } from './dispositivos/dispositivos.component';
import { ListarDispositivosComponent } from './dispositivos/listar-dispositivos/listar-dispositivos.component';
import { CreaeditaDispositivosComponent } from './dispositivos/creaedita-dispositivos/creaedita-dispositivos.component';
import { MetodoPagoComponent } from './metodo-pago/metodo-pago.component';
import { CrearMetodoPagoComponent } from './metodo-pago/crear-metodo-pago/crear-metodo-pago.component';
import { ListarMetodoPagoComponent } from './metodo-pago/listar-metodo-pago/listar-metodo-pago.component';
import { HomeComponent } from './home/home.component';
import { ComprobantePagoComponent } from './comprobante-pago/comprobante-pago.component';
import { ListarComprobantesComponent } from './comprobante-pago/listar-comprobantes/listar-comprobantes.component';
import { CreaeditaComprobantesComponent } from './comprobante-pago/creaedita-comprobantes/creaedita-comprobantes.component';
import { ListarDetallesComponent } from './detalle-pago/listar-detalles/listar-detalles.component';
import { DetallePagoComponent } from './detalle-pago/detalle-pago.component';
import { RolesComponent } from './roles/roles.component';
import { ListarRolesComponent } from './roles/listar-roles/listar-roles.component';
import { CreaeditaRolesComponent } from './roles/creaedita-roles/creaedita-roles.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ReportecantdispositivosComponent } from './reporte/reportecantdispositivos/reportecantdispositivos.component';
import { NgChartsModule } from 'ng2-charts';
import { ChatgptComponent } from './chatgpt/chatgpt.component';
import { ReporteconsumototaldehorasComponent } from './reporte/reporteconsumototaldehoras/reporteconsumototaldehoras.component';
import { ReporteusersmembresiamontorecaudadoComponent } from './reporte/reporteusersmembresiamontorecaudado/reporteusersmembresiamontorecaudado.component';
import { ReportecantidadbyusuarioComponent } from './reporte/reportecantidadbyusuario/reportecantidadbyusuario.component';
import { ReportesumaxmetedopagoComponent } from './reporte/reportesumaxmetedopago/reportesumaxmetedopago.component';


@NgModule({
  declarations: [
    MembresiaComponent,
    CrearMembresiaComponent,
    ListarMembresiaComponent,
    UsersComponent,
    ListarUsersComponent,
    CreaeditaUsersComponent,
    TdispositivoComponent,
    ListarDispositivoComponent,
    CreaeditaDispositivoComponent,
    DispositivosComponent,
    ListarDispositivosComponent,
    CreaeditaDispositivosComponent,
    MetodoPagoComponent,
    CrearMetodoPagoComponent,
    ListarMetodoPagoComponent,
    HomeComponent,
    ComprobantePagoComponent,
    ListarComprobantesComponent,
    CreaeditaComprobantesComponent,
    CreaeditaDetallesComponent,
    ListarDetallesComponent,
    DetallePagoComponent,
    ListarComprobantesComponent,
    RolesComponent,
    ListarRolesComponent,
    CreaeditaRolesComponent,
    ReporteComponent,
    ReportecantdispositivosComponent,
    ChatgptComponent,
    ReporteconsumototaldehorasComponent,
    ReporteusersmembresiamontorecaudadoComponent,
    ReportecantidadbyusuarioComponent,
    ReportesumaxmetedopagoComponent,

  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgChartsModule,
  ]
})
export class ComponentsModule { }

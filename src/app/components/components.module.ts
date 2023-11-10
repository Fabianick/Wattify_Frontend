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
    MatIconModule
  ]
})
export class ComponentsModule { }

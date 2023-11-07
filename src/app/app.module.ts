import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { CrearMembresiaComponent } from './components/membresia/crear-membresia/crear-membresia.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './components/users/users.component';
import { ListarUsersComponent } from './components/users/listar-users/listar-users.component';
import { CreaeditaUsersComponent } from './components/users/creaedita-users/creaedita-users.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TdispositivoComponent } from './components/tdispositivo/tdispositivo.component';
import { ListarDispositivoComponent } from './components/tdispositivo/listar-dispositivo/listar-dispositivo.component';
import { CreaeditaDispositivoComponent } from './components/tdispositivo/creaedita-dispositivo/creaedita-dispositivo.component';
import { DispositivosComponent } from './components/dispositivos/dispositivos.component';
import { ListarDispositivosComponent } from './components/dispositivos/listar-dispositivos/listar-dispositivos.component';
import { CreaeditaDispositivosComponent } from './components/dispositivos/creaedita-dispositivos/creaedita-dispositivos.component';
import { MetodoPagoComponent } from './components/metodo-pago/metodo-pago.component';
import { CrearMetodoPagoComponent } from './components/metodo-pago/crear-metodo-pago/crear-metodo-pago.component';
import { ListarMetodoPagoComponent } from './components/metodo-pago/listar-metodo-pago/listar-metodo-pago.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

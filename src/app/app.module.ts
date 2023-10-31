import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembresiaComponent } from './components/membresia/membresia.component';
import { CrearMembresiaComponent } from './components/membresia/crear-membresia/crear-membresia.component';
import { ListarMembresiaComponent } from './components/membresia/listar-membresia/listar-membresia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MembresiaComponent,
    CrearMembresiaComponent,
    ListarMembresiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

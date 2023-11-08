import { TipoDispositivo } from './../../../models/tipoDispositivo';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Dispositivo } from 'src/app/models/dispositivo';
import { DispositivoService } from 'src/app/services/dispositivo.service';
import { TipoDispositivoService } from 'src/app/services/tipo-dispositivo.service';

@Component({
  selector: 'app-creaedita-dispositivos',
  templateUrl: './creaedita-dispositivos.component.html',
  styleUrls: ['./creaedita-dispositivos.component.css'],
})
export class CreaeditaDispositivosComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  dispositivo: Dispositivo = new Dispositivo();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  listaTiposDispositivos:TipoDispositivo[]=[]

  constructor(
    private dS: DispositivoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private tdS: TipoDispositivoService,

  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      idDispositivo: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      consumoHora: ['', [Validators.required]],
      horasEncendidas: ['', Validators.required],
      fecha: ['', Validators.required],
      tipoDispositivo: ['', Validators.required],
    });
    this.tdS.list().subscribe((data) => {
      this.listaTiposDispositivos = data;
    })
  }
  aceptar(): void {
    if (this.form.valid) {
      this.dispositivo.idDispositivo = this.form.value.idDispositivo;
      this.dispositivo.nombre = this.form.value.nombre;
      this.dispositivo.descripcion = this.form.value.descripcion;
      this.dispositivo.consumoHora =
        this.form.value.consumoHora;
      this.dispositivo.horasEncendidas = this.form.value.horasEncendidas;
      this.dispositivo.fecha = this.form.value.fecha;
      this.dispositivo.tipoDispositivo = this.form.value.tipoDispositivo;


      if (this.edicion) {
        this.dS.update(this.dispositivo).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      } else {
        this.dS.insert(this.dispositivo).subscribe((data) => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      }
      this.router.navigate(['dispositivos']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  init() {
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id_Dispositivo: new FormControl(data.idDispositivo),
          nombre: new FormControl(data.nombre),
          descripcion: new FormControl(data.descripcion),
          consumoHora: new FormControl(data.consumoHora),
          horasEncendidas: new FormControl(data.horasEncendidas),
          fecha: new FormControl(data.fecha),
          tipoDispositivo: new FormControl(data.tipoDispositivo),
        });
      });
    }
  }
}

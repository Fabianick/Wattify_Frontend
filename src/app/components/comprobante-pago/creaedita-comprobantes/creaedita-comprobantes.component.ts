import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Comprobantepago } from 'src/app/models/comprobante-pago';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { Users } from 'src/app/models/users';
import { ComprobantePagoService } from 'src/app/services/comprobante-pago.service';
import { MetodoPagoService } from 'src/app/services/metodo-pago.service';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-creaedita-comprobantes',
  templateUrl: './creaedita-comprobantes.component.html',
  styleUrls: ['./creaedita-comprobantes.component.css']
})
export class CreaeditaComprobantesComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  comprobante: Comprobantepago = new Comprobantepago();
  listausers:Users[]=[];
  listametodopago: MetodoPago []=[];
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  constructor(
    private cS: ComprobantePagoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private uS: UsersService,
    private mpS: MetodoPagoService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    const fechaActual = moment().format('YYYY-MM-DD');
    this.form = this.formBuilder.group({
      id: [''],
      fechaEmision: [fechaActual],
      metodo_de_pago: ['', Validators.required],
      costo_total: ['', Validators.required],
      user: ['', Validators.required],
    });
    this.uS.list().subscribe((data) => {
      this.listausers = data;
    })
    this.mpS.list().subscribe((data) => {
      this.listametodopago = data;
    })
  }
  aceptar(): void {
    if (this.form.valid) {
      this.comprobante.id = this.form.value.id;
      this.comprobante.fechaEmision = this.form.value.fechaEmision;
      this.comprobante.metodo_de_pago.id_MetodoPago = this.form.value.metodo_de_pago;
      this.comprobante.costo_total = this.form.value.costo_total;
      this.comprobante.user.id = this.form.value.user;
      if (this.edicion) {
        this.cS.update(this.comprobante).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.comprobante).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['components/comprobante-pago']);
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
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          fechaEmision: new FormControl(data.fechaEmision),
          metodo_de_pago: new FormControl(data.metodo_de_pago.id_MetodoPago),
          costo_total: new FormControl(data.costo_total),
          user: new FormControl(data.user.id),
        });
      });
    }
  }
}

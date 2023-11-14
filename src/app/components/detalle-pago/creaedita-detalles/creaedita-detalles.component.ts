import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { comprobantepago } from 'src/app/models/comprobante-pago';
import { detallepago } from 'src/app/models/detalle-pago';
import { Membresia } from 'src/app/models/membresia';
import { ComprobantePagoService } from 'src/app/services/comprobante-pago.service';
import { DetallePagoService } from 'src/app/services/detalle-pago.service';
import { MembresiaService } from 'src/app/services/membresia.service';
@Component({
  selector: 'app-creaedita-detalles',
  templateUrl: './creaedita-detalles.component.html',
  styleUrls: ['./creaedita-detalles.component.css']
})
export class CreaeditaDetallesComponent {
  form: FormGroup = new FormGroup({});
  detalle: detallepago = new detallepago();
  listacomprobante:comprobantepago[]=[];
  listamembresia: Membresia []=[];
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;
  constructor(
    private dpS: DetallePagoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cS: ComprobantePagoService,
    private mS: MembresiaService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      id: [''],
      cantidad_dispositivo: ['', Validators.required],
      consumo_dispositivo: ['', Validators.required],
      costo_dispositivo: ['', [Validators.required]],
      sub_total_pago: ['', Validators.required],
      comprobante_pago: ['', Validators.required],
      membresia: ['', Validators.required],
    });
    this.cS.list().subscribe((data) => {
      this.listacomprobante = data;
    })
    this.mS.list().subscribe((data) => {
      this.listamembresia = data;
    })
  }
  aceptar(): void {
    if (this.form.valid) {
      this.detalle.id = this.form.value.id;
      this.detalle.cantidad_dispositivo = this.form.value.Cantidad_dispositivo;
      this.detalle.consumo_dispositivo = this.form.value.Consumo_dispositivo;
      this.detalle.costo_dispositivo = this.form.value.Costo_dispositivo;
      this.detalle.sub_total_pago = this.form.value.Sub_total_pago;
      this.detalle.comprobante_pago = this.form.value.comprobante_pago;
      this.detalle.membresia = this.form.value.membresia;


      if (this.edicion) {
        this.dpS.update(this.detalle).subscribe(() => {
          this.dpS.list().subscribe((data) => {
            this.dpS.setList(data);
          });
        });
      } else {
        this.dpS.insert(this.detalle).subscribe((data) => {
          this.dpS.list().subscribe((data) => {
            this.dpS.setList(data);
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
      this.dpS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          Cantidad_dispositivo: new FormControl(data.cantidad_dispositivo),
          Consumo_dispositivo: new FormControl(data.consumo_dispositivo),
          Costo_dispositivo: new FormControl(data.costo_dispositivo),
          Sub_total_pago: new FormControl(data.sub_total_pago),
          comprobante_pago: new FormControl(data.comprobante_pago),
          membresia: new FormControl(data.membresia),
        });
      });
    }
  }
}

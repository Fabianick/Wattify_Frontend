import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { MetodoPagoService } from 'src/app/services/metodo-pago.service';

@Component({
  selector: 'app-crear-metodo-pago',
  templateUrl: './crear-metodo-pago.component.html',
  styleUrls: ['./crear-metodo-pago.component.css']
})
export class CrearMetodoPagoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  metodopago: MetodoPago = new MetodoPago();
  mensaje: string = '';
  edicion: boolean = false;
  id:number=0;

  constructor(
    private mS: MetodoPagoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    //hu3 y hu4
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });


    //hu3 y hu4
    this.form = this.formBuilder.group({
      id_MetodoPago: [''],
      tipo_de_pago: ['', Validators.required],
      titular: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.metodopago.id_MetodoPago = this.form.value.id_MetodoPago;
      this.metodopago.tipo_de_pago = this.form.value.tipo_de_pago;
      this.metodopago.titular = this.form.value.titular;

      //inicio hu3 y 4
      if (this.edicion) {
        this.mS.update(this.metodopago).subscribe(() => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      } else {
        this.mS.insert(this.metodopago).subscribe((data) => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      }
      //fin hu3 y 4
      this.router.navigate(['components/metodo-pago/lista']); //permite llevar a la ruta deseada después de presionar el botón
      this.form.reset;
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
      this.mS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id_MetodoPago: new FormControl(data.id_MetodoPago),
          tipo_de_pago: new FormControl(data.tipo_de_pago),
          titular: new FormControl(data.titular),

        });
      });
    }
  }

}

import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Membresia } from 'src/app/models/membresia';
import { MembresiaService } from 'src/app/services/membresia.service';
import * as moment from 'moment';

@Component({
  selector: 'app-crear-membresia',
  templateUrl: './crear-membresia.component.html',
  styleUrls: ['./crear-membresia.component.css']
})
export class CrearMembresiaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  membresia: Membresia = new Membresia();
  mensaje: string = '';
  //hu3 y 4
  maxFecha: Date = moment().add(-1, 'days').toDate();
  edicion: boolean = false;
  id:number=0;
  //hu3 y 4
  tipos: { value: string; viewValue: string }[] = [
    { value: 'Tipo1', viewValue: 'Tipo1' },
    { value: 'Tipo2', viewValue: 'Tipo2' },
    { value: 'Tipo3', viewValue: 'Tipo3' },
  ];
  constructor(
    private mS: MembresiaService,
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
      id_Membresia: [''],
      tipoMembresia: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', [Validators.required]],
      precio: ['',[Validators.required]],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.membresia.id_Membresia = this.form.value.id_Membresia;
      this.membresia.tipoMembresia = this.form.value.tipoMembresia;
      this.membresia.fechaInicio = this.form.value.fechaInicio;
      this.membresia.fechaFin = this.form.value.fechaFin;
      this.membresia.precio = this.form.value.precio;

      //inicio hu3 y 4
      if (this.edicion) {
        this.mS.update(this.membresia).subscribe(() => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      } else {
        this.mS.insert(this.membresia).subscribe((data) => {
          this.mS.list().subscribe((data) => {
            this.mS.setList(data);
          });
        });
      }
      //fin hu3 y 4
      this.router.navigate(['components/membresias/lista']); //permite llevar a la ruta deseada después de presionar el botón
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
          id_Membresia: new FormControl(data.id_Membresia),
          tipoMembresia: new FormControl(data.tipoMembresia),
          fechaInicio: new FormControl(data.fechaInicio),
          fechaFin: new FormControl(data.fechaFin),
          precio: new FormControl(data.precio),
        });
      });
    }
  }
}



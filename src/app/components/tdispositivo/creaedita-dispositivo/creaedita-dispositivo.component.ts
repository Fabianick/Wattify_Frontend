import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoDispositivo } from 'src/app/models/tipoDispositivo';
import { TipoDispositivoService } from 'src/app/services/tipo-dispositivo.service';

@Component({
  selector: 'app-creaedita-dispositivo',
  templateUrl: './creaedita-dispositivo.component.html',
  styleUrls: ['./creaedita-dispositivo.component.css']
})
export class CreaeditaDispositivoComponent implements OnInit{

  form: FormGroup = new FormGroup({});
  tDispo: TipoDispositivo = new TipoDispositivo();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean=false;

  constructor(
    private uS:TipoDispositivoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
    this.id = data['id'];
    this.edicion = data['id'] != null;
    this.init();
  });
  this.form = this.formBuilder.group({
    idTipoDispositivo: [''],
    nombreTipoDispositivo: ['', Validators.required],
    descripcion: ['', Validators.required],
  });
}
  aceptar(): void {
    if (this.form.valid) {
      this.tDispo.idTipoDispositivo = this.form.value.idTipoDispositivo;
      this.tDispo.nombreTipoDispositivo = this.form.value.nombreTipoDispositivo;
      this.tDispo.descripcion = this.form.value.descripcion;
      if (this.edicion) {
        this.uS.update(this.tDispo).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        this.uS.insert(this.tDispo).subscribe((data) => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['components/Tdispositivo']);
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
      this.uS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          idTipoDispositivo: new FormControl(data.idTipoDispositivo),
          nombreTipoDispositivo: new FormControl(data.nombreTipoDispositivo),
          descripcion: new FormControl(data.descripcion),
        });
      });
    }
  }
}

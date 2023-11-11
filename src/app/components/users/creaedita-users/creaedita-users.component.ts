import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-creaedita-users',
  templateUrl: './creaedita-users.component.html',
  styleUrls: ['./creaedita-users.component.css']
})
export class CreaeditaUsersComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  usuario: Users = new Users();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean=false;
  tipos:{ value: string; viewValue: string}[]=[
    { value:'Masculino', viewValue: 'Masculino'},
    { value:'Femenino', viewValue: 'Femenino'},
    { value:'Otros', viewValue: 'Otros'},
  ];
  constructor(
    private uS:UsersService,
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
    id: [''],
    username: ['', Validators.required],
    password: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    genero: ['', Validators.required],
    direccion: ['', Validators.required],
    dni: ['', [Validators.required]],
    celular: ['', Validators.required],
  });
}
  aceptar(): void {
    if (this.form.valid) {
      this.usuario.id = this.form.value.id;
      this.usuario.username = this.form.value.username;
      this.usuario.password = this.form.value.password;
      this.usuario.enabled =  true;
      this.usuario.nombres = this.form.value.nombres;
      this.usuario.apellidos = this.form.value.apellidos;
      this.usuario.genero = this.form.value.genero;
      this.usuario.direccion = this.form.value.direccion;
      this.usuario.dni =  this.form.value.dni;
      this.usuario.celular = this.form.value.celular;
      if (this.edicion) {
        this.uS.update(this.usuario).subscribe(() => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      } else {
        this.uS.insert(this.usuario).subscribe((data) => {
          this.uS.list().subscribe((data) => {
            this.uS.setList(data);
          });
        });
      }
      this.router.navigate(['components/usuarios']);
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
          id: new FormControl(data.id),
          username: new FormControl(data.username),
          password: new FormControl(data.password),
          enabled:new FormControl(data.enabled),
          nombres: new FormControl(data.nombres),
          apellidos: new FormControl(data.apellidos),
          genero: new FormControl(data.genero),
          direccion: new FormControl(data.direccion),
          dni:new FormControl(data.dni),
          celular: new FormControl(data.celular),
        });
      });
    }
  }
}

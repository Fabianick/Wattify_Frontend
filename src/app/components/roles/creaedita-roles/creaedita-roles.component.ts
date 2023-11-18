import { Component,OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Roles } from 'src/app/models/roles';
import { Users } from 'src/app/models/users';
import { RolesService } from 'src/app/services/roles.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-creaedita-roles',
  templateUrl: './creaedita-roles.component.html',
  styleUrls: ['./creaedita-roles.component.css']
})
export class CreaeditaRolesComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  rols: Roles = new Roles();
  mensaje: string = '';
  //hu3 y 4
  edicion: boolean = false;
  id:number=0;
  listaUsuario: Users[]=[];
  tipos: { value: string; viewValue: string }[] = [
    { value: 'ADMIN', viewValue: 'ADMIN' },
    { value: 'USER', viewValue: 'USER' },
  ];
  constructor(
    private rS: RolesService,
    private uS: UsersService,
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
      id: [''],
      rol: ['', Validators.required],
      user: ['',Validators.required],
    });

    this.uS.list().subscribe((data) => {
      this.listaUsuario= data;
    })
  }

  aceptar(): void {
    if (this.form.valid) {
      this.rols.id= this.form.value.id;
      this.rols.rol= this.form.value.rol;
      this.rols.user.id= this.form.value.user;


      //inicio hu3 y 4
      if (this.edicion) {
        this.rS.update(this.rols.rol,this.rols.user.id).subscribe(() => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      } else {
        this.rS.insert(this.rols.rol,this.rols.user.id).subscribe((data) => {
          this.rS.list().subscribe((data) => {
            this.rS.setList(data);
          });
        });
      }
      //fin hu3 y 4
      this.router.navigate(['components/roles']); //permite llevar a la ruta deseada después de presionar el botón
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
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          rol: new FormControl(data.rol),
          user: new FormControl(data.user.id)
        });
      });
    }
  }


}

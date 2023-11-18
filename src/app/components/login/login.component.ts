import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';
import { JwtRequest } from 'src/app/models/jwtRequest';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../assets/styles/login.css']
})
export class LoginComponent implements OnInit{
  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar,
    private uS:UsersService,private formBuilder: FormBuilder, private route: ActivatedRoute ){}
  username: string = ""
  password: string = ""
  mensaje: string = ""
  form: FormGroup = new FormGroup({});
  usuario: Users = new Users();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombres: [''],
      apellidos: [''],
      genero: [''],
      direccion: ['', Validators.required],
      dni: [''],
      celular: [''],
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

      this.uS.insert(this.usuario).subscribe((data) => {
        this.uS.list().subscribe((data) => {
          this.uS.setList(data);
        });
      });

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
  login() {
    let request = new JwtRequest();
    request.username = this.username;
    request.password = this.password;
    this.loginService.login(request).subscribe((data: any) => {
      sessionStorage.setItem("token", data.jwttoken);
      this.router.navigate(['components']);
    }, error => {
      this.mensaje = "Credenciales incorrectas!!!"
      this.snackBar.open(this.mensaje, "Aviso",{duration:2000});
    });
   }
}

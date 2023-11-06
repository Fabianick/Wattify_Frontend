import { Component,OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/models/users';
import { MatPaginator } from '@angular/material/paginator';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {
  datasource: MatTableDataSource<Users> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'username',
    'nombres',
    'apellidos',
    'genero',
    'direccion',
    'dni',
    'celular',
    'accion01',
    'accion02',
  ];
  constructor(private uS:UsersService){}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
    this.uS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;

    });
  }
  eliminar(id: number) {
    this.uS.delete(id).subscribe((data) => {
    this.uS.list().subscribe((data) => {
    this.uS.setList(data);
    });
    });
    }
    filter(en: any) {
    this.datasource.filter = en.target.value.trim();
    }
}

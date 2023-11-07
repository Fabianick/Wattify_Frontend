import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Dispositivo } from 'src/app/models/dispositivo';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
  selector: 'app-listar-dispositivos',
  templateUrl: './listar-dispositivos.component.html',
  styleUrls: ['./listar-dispositivos.component.css']
})
export class ListarDispositivosComponent implements OnInit{

  datasource: MatTableDataSource<Dispositivo> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'Codigo',
    'Dispositivo',
    'Descripcion',
    'Consumohora',
    'Horasencendidas',
    'Fecha',
    'Tipodispo',
    'accion01',
    'accion02',
  ];

  constructor(private uS:DispositivoService){}
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

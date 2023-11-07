import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TipoDispositivo } from 'src/app/models/tipoDispositivo';
import { TipoDispositivoService } from 'src/app/services/tipo-dispositivo.service';

@Component({
  selector: 'app-listar-dispositivo',
  templateUrl: './listar-dispositivo.component.html',
  styleUrls: ['./listar-dispositivo.component.css']
})
export class ListarDispositivoComponent implements OnInit{

  datasource: MatTableDataSource<TipoDispositivo> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'Codigo',
    'TipoDispositivo',
    'Descripcion',
    'accion01',
    'accion02',
  ];

  constructor(private uS:TipoDispositivoService){}
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

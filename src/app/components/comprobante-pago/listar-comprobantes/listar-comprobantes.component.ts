import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Comprobantepago } from 'src/app/models/comprobante-pago';
import { ComprobantePagoService } from 'src/app/services/comprobante-pago.service';

@Component({
  selector: 'app-listar-comprobante',
  templateUrl: './listar-comprobantes.component.html',
  styleUrls: ['./listar-comprobantes.component.css']
})
export class ListarComprobantesComponent implements OnInit{
  datasource: MatTableDataSource<Comprobantepago> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'Codigo',
    'Fecha_Emision',
    'Metodo_de_Pago',
    'Costo_Total',
    'Usuario',
    'accion01',
    'accion02',
  ];
  constructor(private uS:ComprobantePagoService){}
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

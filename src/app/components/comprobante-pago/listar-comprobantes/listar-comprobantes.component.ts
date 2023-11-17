import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Comprobantepago } from 'src/app/models/comprobante-pago';
import { ComprobantePagoService } from 'src/app/services/comprobante-pago.service';

@Component({
  selector: 'app-listar-comprobantes',
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
  constructor(private cS:ComprobantePagoService){}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
    this.cS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;

    });
  }
  eliminar(idc: number) {
    this.cS.delete(idc).subscribe((data) => {
    this.cS.list().subscribe((data) => {
    this.cS.setList(data);
    });
    });
  }
  filter(en: any) {
    this.datasource.filter = en.target.value.trim();
  }
}

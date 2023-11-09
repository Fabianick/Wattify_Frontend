import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { comprobantepago } from 'src/app/models/comprobante-pago';
import { ComprobantePagoService } from 'src/app/services/comprobante-pago.service';

@Component({
  selector: 'app-listar-comprobante',
  templateUrl: './listar-comprobante.component.html',
  styleUrls: ['./listar-comprobante.component.css']
})
export class ListarComprobanteComponent implements OnInit{
  datasource: MatTableDataSource<comprobantepago> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'Codigo',
    'Fecha Emision',
    'Metodo de Pago',
    'Costo Total',
    'Usuario',
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
}

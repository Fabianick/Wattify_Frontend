import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { detallepago } from 'src/app/models/detalle-pago';
import { DetallePagoService } from 'src/app/services/detalle-pago.service';

@Component({
  selector: 'app-listar-detalles',
  templateUrl: './listar-detalles.component.html',
  styleUrls: ['./listar-detalles.component.css']
})
export class ListarDetallesComponent implements OnInit{
  datasource: MatTableDataSource<detallepago> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'cantidad_dispositivo',
    'consumo_dispositivo',
    'costo_dispositivo',
    'sub_total_pago',
    'comprobante_pago',
    'membresia',
    'accion01',
    'accion02',
  ];
  constructor(private dpS:DetallePagoService){}
  ngOnInit(): void {
    this.dpS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
    this.dpS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;

    });
  }
  eliminar(id: number) {
    this.dpS.delete(id).subscribe((data) => {
    this.dpS.list().subscribe((data) => {
    this.dpS.setList(data);
    });
    });
  }
  filter(en: any) {
    this.datasource.filter = en.target.value.trim();
  }
}

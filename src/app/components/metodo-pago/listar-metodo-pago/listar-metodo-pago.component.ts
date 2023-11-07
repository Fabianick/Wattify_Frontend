import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MetodoPago } from 'src/app/models/metodo-pago';
import { MetodoPagoService } from 'src/app/services/metodo-pago.service';

@Component({
  selector: 'app-listar-metodo-pago',
  templateUrl: './listar-metodo-pago.component.html',
  styleUrls: ['./listar-metodo-pago.component.css']
})
export class ListarMetodoPagoComponent implements OnInit{
  dataSource: MatTableDataSource<MetodoPago> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'tipo_de_pago',
    'titular',
    'accion01',
    'accion02'
  ];
  constructor(private mS: MetodoPagoService) {}
  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });
  }

  //hu3 y hu4
  eliminar(id: number){
    this.mS.delete(id).subscribe((data) => {
      this.mS.list().subscribe((data) => {
      this.mS.setList(data);
      });
      });      
  }

  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }

}

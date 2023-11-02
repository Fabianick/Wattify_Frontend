import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Membresia } from 'src/app/models/membresia';
import { MembresiaService } from 'src/app/services/membresia.service';

@Component({
  selector: 'app-listar-membresia',
  templateUrl: './listar-membresia.component.html',
  styleUrls: ['./listar-membresia.component.css']
})
export class ListarMembresiaComponent implements OnInit{
  dataSource: MatTableDataSource<Membresia> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'tipo',
    'fechaInicial',
    'fechaFinal',
    'precio',
    'accion01',
    'accion02'
  ];
  constructor(private mS: MembresiaService) {}
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
  //hu3 y hu4
}  


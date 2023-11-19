import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { MembresiaService } from 'src/app/services/membresia.service';

@Component({
  selector: 'app-reporteusersmembresiamontorecaudado',
  templateUrl: './reporteusersmembresiamontorecaudado.component.html',
  styleUrls: ['./reporteusersmembresiamontorecaudado.component.css']
})
export class ReporteusersmembresiamontorecaudadoComponent implements OnInit{
  barChartOptions:ChartOptions={
    responsive:true,
  };
  barChartLabels:string []=[];
  barChartType:ChartType='doughnut';
  barChartLegend=true
  barChartData:ChartDataset[]=[]
 constructor(private mS:MembresiaService){}
  ngOnInit(): void {
    this.mS.getCount().subscribe(data=>{
      this.barChartLabels=data.map(item=>item.tipoMembresia);
      this.barChartData=[{
        data:data.map(item=>item.cantidadUsuarios),
        label:'Cantidad de Usuarios por Membresia',
        }
      ];
      this.barChartData=[{
        data:data.map(item=>item.montoRecaudado),
        label:'Monto Recaudado por Membresia',
        }
      ];
    });
  }
}

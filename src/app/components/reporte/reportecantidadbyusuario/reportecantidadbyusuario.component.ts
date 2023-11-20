import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-reportecantidadbyusuario',
  templateUrl: './reportecantidadbyusuario.component.html',
  styleUrls: ['./reportecantidadbyusuario.component.css']
})
export class ReportecantidadbyusuarioComponent implements OnInit{
  barChartOptions:ChartOptions={
    responsive:true,
  };
  barChartLabels:string []=[];
  barChartType:ChartType='doughnut';
  barChartLegend=true;
  barChartData:ChartDataset[]=[];
 constructor(private uS:UsersService){}
  ngOnInit(): void {
    this.uS.getCount().subscribe(data=>{
      this.barChartLabels=data.map(item=>item.generoUsuario);
      this.barChartData=[{
        data:data.map(item=>item.cantidadUsuario),
        label:'La cantidad de usuarios por genero',
        }
      ]
    });
  }
}

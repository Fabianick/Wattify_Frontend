import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { TipoDispositivoService } from 'src/app/services/tipo-dispositivo.service';

@Component({
  selector: 'app-reportecantdispositivos',
  templateUrl: './reportecantdispositivos.component.html',
  styleUrls: ['./reportecantdispositivos.component.css']
})
export class ReportecantdispositivosComponent implements OnInit{

  barChartOptions:ChartOptions={
    responsive:true,
  };

  barChartLabels:string[] = [];
  barCharType: ChartType = 'bar';//Tipo de gráfico que quieres utilizar
  barChartLegend=true;    //para que nos muestre la leyenda
  barChartData:ChartDataset[]=[];  //para pasar la data

  constructor(private tipodis:TipoDispositivoService){}

  ngOnInit(): void {
    this.tipodis.getDispositivosXtipo().subscribe(data=>{
      this.barChartLabels=data.map(item=>item.nombre_tipo_dispositivo);
      this.barChartData=[
        {
          data:data.map(item=>item.cantidad_de_dispositivos),
          label:'Catidad de dispositivos por tipo de dispositivo'
        },
      ];
    });

  }
}

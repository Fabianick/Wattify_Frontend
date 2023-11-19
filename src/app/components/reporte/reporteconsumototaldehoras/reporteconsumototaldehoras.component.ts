import { Component, OnInit } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { TipoDispositivoService } from 'src/app/services/tipo-dispositivo.service';

@Component({
  selector: 'app-reporteconsumototaldehoras',
  templateUrl: './reporteconsumototaldehoras.component.html',
  styleUrls: ['./reporteconsumototaldehoras.component.css']
})
export class ReporteconsumototaldehorasComponent  implements OnInit {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar'; // Corregido el nombre de la variable
  barChartLegend = true; // para que nos muestre la leyenda
  barChartData: ChartDataset[] = []; // para pasar la data

  constructor(private tipodis: TipoDispositivoService) {}

  ngOnInit(): void {
    this.tipodis.getConsumoHorasByTipoDispositivo().subscribe(data => {
      this.barChartLabels = data.map(item => item.nombre_tipo_dispositivo);
      this.barChartData = [
        {
          data: data.map(item => item.sum),
          label: 'El consumo de hora por tipo de dispositivo',
          

        },
      ];
    });
  }
}




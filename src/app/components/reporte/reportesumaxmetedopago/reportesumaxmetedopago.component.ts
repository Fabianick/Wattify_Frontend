import { Component, OnInit  } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ComprobantePagoService } from 'src/app/services/comprobante-pago.service';

@Component({
  selector: 'app-reportesumaxmetedopago',
  templateUrl: './reportesumaxmetedopago.component.html',
  styleUrls: ['./reportesumaxmetedopago.component.css']
})
export class ReportesumaxmetedopagoComponent implements OnInit{
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: string[] = [];
  barChartType: ChartType = 'bar'; // Corregido el nombre de la variable
  barChartLegend = true; // para que nos muestre la leyenda
  barChartData: ChartDataset[] = []; // para pasar la data

  constructor(private sumatotal: ComprobantePagoService) {}

  ngOnInit(): void {
    this.sumatotal.getsum().subscribe(data => {
      this.barChartLabels = data.map(item => item.name);
      this.barChartData = [
        {
          data: data.map(item => item.cantidad),
          label: 'Suma Total',
        },
      ];
    });
  }
}

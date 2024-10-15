import { Component } from '@angular/core';
import { Color, NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { CardModule } from 'primeng/card';
import { CardDataComponent } from '../card-data/card-data.component';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [NgxChartsModule, CardModule, CardDataComponent],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent {
  barChartData: any[];
  view: any = [600, 300];

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';
  colorScheme: Color = {
    name: 'customScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#45C4B0'],
  };

  constructor() {
    this.barChartData = [
      {
        name: 'January',
        value: 65,
      },
      {
        name: 'February',
        value: 59,
      },
      {
        name: 'March',
        value: 80,
      },
      {
        name: 'April',
        value: 81,
      },
      {
        name: 'May',
        value: 56,
      },
      {
        name: 'June',
        value: 55,
      },
      {
        name: 'July',
        value: 40,
      },
    ];
  }
}

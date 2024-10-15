import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-linechart-with-value',
  standalone: true,
  imports: [CardModule, NgxChartsModule],
  templateUrl: './linechart-with-value.component.html',
  styleUrl: './linechart-with-value.component.scss',
})
export class LinechartWithValueComponent {
  view: [number, number] = [300, 210];
  colorScheme: any = {
    name: 'customScheme',
    selectable: true,
    group: 'Ordinal',
    domain: ['#A1E6BD'],
  };
  multi: any[] = [
    {
      name: 'Germany',
      series: [
        {
          name: '2010',
          value: 3300000,
        },
        {
          name: '2011',
          value: 4940000,
        },
        {
          name: '2012',
          value: 5200000,
        },
        {
          name: '2013',
          value: 6500000,
        },
        {
          name: '2014',
          value: 7800000,
        },
        {
          name: '2015',
          value: 10000000,
        },
      ],
    },
  ];
  gradient: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
}

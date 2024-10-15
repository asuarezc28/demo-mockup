import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NgxChartsModule, TooltipModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-linechart-with-export',
  standalone: true,
  imports: [CardModule, ButtonModule, NgxChartsModule, TooltipModule],
  templateUrl: './linechart-with-export.component.html',
  styleUrl: './linechart-with-export.component.scss',
})
export class LinechartWithExportComponent {
  view: [number, number] = [500, 200];
  colorScheme: any = {
    name: 'customScheme',
    selectable: true,
    group: 'Ordinal',
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
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

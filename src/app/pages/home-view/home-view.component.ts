import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LinechartWithExportComponent } from './components/linechart-with-export/linechart-with-export.component';
import { CardDataComponent } from './components/card-data/card-data.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { LinechartWithValueComponent } from './components/linechart-with-value/linechart-with-value.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { PanelMenuComponent } from './components/panel-menu/panel-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MenuToSidebarComponent } from './components/menu-to-sidebar/menu-to-sidebar.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [
    SidebarComponent,
    BarChartComponent,
    LinechartWithExportComponent,
    CardDataComponent,
    LinechartWithValueComponent,
    TableDataComponent,
    PanelMenuComponent,
    HeaderComponent,
    MenuToSidebarComponent,
  ],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {
  constructor() {}
}

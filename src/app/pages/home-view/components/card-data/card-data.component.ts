import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-data',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card-data.component.html',
  styleUrl: './card-data.component.scss',
})
export class CardDataComponent {
  @Input() headerText: string = '';
  @Input() percentage: string = '';
  @Input() description: string = '';
  @Input() backgroundColor: string = '';
}

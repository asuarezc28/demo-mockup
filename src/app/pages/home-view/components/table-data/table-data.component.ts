import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}
@Component({
  selector: 'app-table-data',
  standalone: true,
  imports: [TableModule],
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.scss',
})
export class TableDataComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.getMockProducts();
  }

  private getMockProducts(): Product[] {
    return [
      { code: 'P001', name: 'Product 1', category: 'Category 1', quantity: 10 },
      { code: 'P002', name: 'Product 2', category: 'Category 2', quantity: 20 },
      { code: 'P003', name: 'Product 3', category: 'Category 3', quantity: 30 },
    ];
  }
}

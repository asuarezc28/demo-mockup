//import { Component } from '@angular/core';

//@Component({
//selector: 'app-panel-menu',
//standalone: true,
//imports: [],
//templateUrl: './panel-menu.component.html',
//styleUrl: './panel-menu.component.scss'
//})
//export class PanelMenuComponent {

//}

import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel-menu',
  templateUrl: './panel-menu.component.html',
  standalone: true,
  imports: [PanelMenuModule, RouterModule, CommonModule],
  providers: [MessageService],
})
export class PanelMenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Files',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Documents',
            icon: 'pi pi-file',
            items: [
              {
                label: 'Invoices',
                icon: 'pi pi-file-pdf',
                items: [
                  {
                    label: 'Pending',
                    icon: 'pi pi-stop',
                  },
                  {
                    label: 'Paid',
                    icon: 'pi pi-check-circle',
                  },
                ],
              },
              {
                label: 'Clients',
                icon: 'pi pi-users',
              },
            ],
          },
          {
            label: 'Images',
            icon: 'pi pi-image',
            items: [
              {
                label: 'Logos',
                icon: 'pi pi-image',
              },
            ],
          },
        ],
      },
      {
        label: 'Cloud',
        icon: 'pi pi-cloud',
        items: [
          {
            label: 'Upload',
            icon: 'pi pi-cloud-upload',
          },
          {
            label: 'Download',
            icon: 'pi pi-cloud-download',
          },
          {
            label: 'Sync',
            icon: 'pi pi-refresh',
          },
        ],
      },
      {
        label: 'Devices',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Phone',
            icon: 'pi pi-mobile',
          },
          {
            label: 'Desktop',
            icon: 'pi pi-desktop',
          },
          {
            label: 'Tablet',
            icon: 'pi pi-tablet',
          },
        ],
      },
    ];
  }
}

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    CommonModule,
  ],
  providers: [provideAnimations()],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: any): void {
    this.sidebarRef.close(e);
  }

  sidebarVisible: boolean = true;
}

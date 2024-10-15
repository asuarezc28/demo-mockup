import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { HeaderComponent } from './pages/home-view/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeViewComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mockup-app';
}

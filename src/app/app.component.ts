import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { SnowComponent } from './shared/components/snow/snow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SnowComponent],
  template: `
    <app-snow />
    <app-nav />
    <main class="main-content">
      <router-outlet />
    </main>
  `,
  styles: [`
    .main-content {
      min-height: 100vh;
    }
  `]
})
export class AppComponent {
  title = 'sara-fernando-wedding';
}

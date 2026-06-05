import { Component, OnInit, OnDestroy, signal, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Snowflake {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

@Component({
  selector: 'app-snow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="snow-container" aria-hidden="true">
      <div
        *ngFor="let flake of snowflakes()"
        class="snowflake"
        [style.left.%]="flake.x"
        [style.width.px]="flake.size"
        [style.height.px]="flake.size"
        [style.animation-duration.s]="flake.duration"
        [style.animation-delay.s]="flake.delay"
        [style.opacity]="flake.opacity"
      ></div>
    </div>
  `,
  styles: [`
    .snow-container {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
    }

    .snowflake {
      position: absolute;
      top: -20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.8);
      animation: snowfall linear infinite;
      filter: blur(0.5px);
    }

    @keyframes snowfall {
      0% {
        transform: translateY(-20px) translateX(0) rotate(0deg);
        opacity: 0;
      }
      5% { opacity: var(--flake-opacity, 0.6); }
      95% { opacity: var(--flake-opacity, 0.6); }
      100% {
        transform: translateY(110vh) translateX(40px) rotate(360deg);
        opacity: 0;
      }
    }
  `]
})
export class SnowComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  snowflakes = signal<Snowflake[]>([]);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.generateSnowflakes();
    }
  }

  private generateSnowflakes() {
    const flakes: Snowflake[] = [];
    for (let i = 0; i < 35; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 15 + 12,
        delay: Math.random() * -20,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    this.snowflakes.set(flakes);
  }
}

import { Component, OnInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CountdownData } from '../../core/models/wedding.models';
import { WeddingDataService } from '../../core/services/wedding-data.service';

interface NavCard {
  path: string;
  label: string;
  sublabel: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly weddingData = inject(WeddingDataService);
  private countdownInterval?: ReturnType<typeof setInterval>;

  countdown = signal<CountdownData>({ dias: 0, horas: 0, minutos: 0, segundos: 0 });

  navCards: NavCard[] = [
    { path: '/la-boda',        label: 'El Gran Día',   sublabel: 'La ceremonia',   icon: 'tree' },
    { path: '/nuestro-madrid', label: 'Nuestro Madrid',sublabel: 'La ciudad',      icon: 'city' },
    { path: '/transporte',     label: 'Transporte',    sublabel: 'Cómo llegar',    icon: 'carriage' },
    { path: '/confirmacion',   label: 'Confirmación',  sublabel: 'Tu respuesta',   icon: 'letter' },
    { path: '/regalo',         label: 'Regalo',        sublabel: 'Si queréis',     icon: 'gift' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCountdown();
      this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
    }
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const target = this.weddingData.weddingDate.getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.countdown.set({ dias: 0, horas: 0, minutos: 0, segundos: 0 });
      return;
    }

    this.countdown.set({
      dias:     Math.floor(diff / (1000 * 60 * 60 * 24)),
      horas:    Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutos:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      segundos: Math.floor((diff % (1000 * 60)) / 1000)
    });
  }

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}

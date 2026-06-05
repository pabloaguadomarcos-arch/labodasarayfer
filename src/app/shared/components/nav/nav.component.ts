import { Component, signal, HostListener, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  private router = inject(Router);

  isOpen = signal(false);
  isScrolled = signal(false);
  isHome = signal(true);

  navItems: NavItem[] = [
    { path: '/la-boda',       label: 'El Gran Día',       icon: '⛪' },
    { path: '/transporte',    label: 'Transporte',         icon: '🚌' },
    { path: '/nuestro-madrid',label: 'Nuestro Madrid',     icon: '🏛️' },
    { path: '/regalo',        label: 'Regalo',             icon: '🎁' },
    { path: '/confirmacion',  label: 'Confirmación',       icon: '✉️' },
  ];

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.isHome.set(e.urlAfterRedirects === '/');
        this.isOpen.set(false);
      });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 80);
  }

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}

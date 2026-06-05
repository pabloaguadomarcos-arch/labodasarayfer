import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-regalo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.scss']
})
export class RegaloComponent {
  private meta = inject(Meta);
  private titleService = inject(Title);

  readonly iban = 'ES12 3456 7890 1234 5678 9012';
  readonly titular = 'Sara & Fernando';

  copied = signal(false);

  constructor() {
    this.titleService.setTitle('Regalo · Sara & Fernando · 12.12.2026');
    this.meta.updateTag({
      name: 'description',
      content: 'El mejor regalo será compartir este día con vosotros.'
    });
  }

  copyIban(): void {
    const raw = this.iban.replace(/\s/g, '');
    navigator.clipboard.writeText(raw).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 3000);
    }).catch(() => {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = raw;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 3000);
    });
  }
}

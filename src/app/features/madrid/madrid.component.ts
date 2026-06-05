import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingDataService } from '../../core/services/wedding-data.service';

@Component({
  selector: 'app-madrid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './madrid.component.html',
  styleUrl: './madrid.component.scss'
})
export class MadridComponent {
  readonly data = inject(WeddingDataService);
}

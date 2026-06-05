import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingDataService } from '../../core/services/wedding-data.service';

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {
  readonly data = inject(WeddingDataService);
}

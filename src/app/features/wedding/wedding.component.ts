import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeddingDataService } from '../../core/services/wedding-data.service';

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss'
})
export class WeddingComponent {
  readonly data = inject(WeddingDataService);
}

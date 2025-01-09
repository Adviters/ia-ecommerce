import { Component, Input } from '@angular/core';
import { Shoes } from 'src/app/models/shoes';

@Component({
  selector: 'app-shoes-item',
  templateUrl: './shoes-item.component.html',
  styleUrls: ['./shoes-item.component.scss'],
})
export class ShoeItemComponent {
  @Input() shoe!: Shoes;
}

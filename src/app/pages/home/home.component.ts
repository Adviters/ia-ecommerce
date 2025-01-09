import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';
import { Product } from 'src/app/interfaces/products.interface';
import { Shoes } from 'src/app/models/shoes';
import { ShoesListService } from 'src/app/services/shoes-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private shoeListService = inject(ShoesListService);
  shoesList: Product[] = [];
  lista: any;
  ngOnInit() {
    this.shoeListService.getProducts().subscribe((data) => {
      console.log(data);
    });
  }
}

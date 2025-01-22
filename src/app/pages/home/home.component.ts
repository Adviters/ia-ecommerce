import { Component, inject } from '@angular/core';
import { HomeRequest } from 'src/app/interfaces/home-request.interface';
import { MarketRequest } from 'src/app/interfaces/market-request.interface';
import { Product } from 'src/app/interfaces/products.interface';
import { HomeRequestService } from 'src/app/services/home-request.service';
import { ShoesListService } from 'src/app/services/shoes-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private shoeListService = inject(ShoesListService);
  shoesList: Product[] = [];
  private homeRequestService = inject(HomeRequestService);
  searchQuery: string = '';
  allShoesList: any[] = [];
  isFiltered: boolean = false;
  private productImages: { [key: number]: string } = {
    1: 'assets/img/shoes/1.jpg',
    2: 'assets/img/shoes/2.jpg',
    3: 'assets/img/shoes/3.jpg',
    4: 'assets/img/shoes/4.jpg',
    5: 'assets/img/shoes/5.jpg',
    6: 'assets/img/shoes/6.jpg',
    7: 'assets/img/shoes/7.jpg',
    8: 'assets/img/shoes/8.jpg',
    9: 'assets/img/shoes/9.jpg',
    10: 'assets/img/shoes/10.jpg',
    11: 'assets/img/shoes/11.jpg',
    12: 'assets/img/shoes/12.jpg',
    13: 'assets/img/shoes/13.jpg',
    14: 'assets/img/shoes/14.jpg',
    15: 'assets/img/shoes/15.jpg',
  };

  ngOnInit() {
    this.shoeListService.getProducts().subscribe((data) => {
      this.allShoesList = data.productos.map((product) => ({
        ...product,
        imageUrl: this.productImages[product.id] || 'assets/images/default.jpg',
      }));
      this.shoesList = [...this.allShoesList];
      console.log('data', this.shoesList);
    });
  }

  onSearchClick() {
    if (this.searchQuery.trim() === '') {
      return;
    }
    const data: HomeRequest = {
      query: this.searchQuery,
      secret_key: 'l2umfnx@tz=pnfm2&j*\\$oxpq_7r)-=ud*7\\$v149ss*9(vnk4-8',
    };

    this.homeRequestService.sendHomeRequest(data).subscribe({
      next: (response) => {
        console.log('Productos encontrados:', response);
        this.updateShoesList(response.response);
        this.isFiltered = true;
      },
      error: (error) => console.error('Error al buscar productos:', error),
    });
  }

  private updateShoesList(products: Product[]) {
    this.shoesList = products.map((product) => ({
      ...product,
      imageUrl: this.productImages[product.id] || 'assets/images/default.jpg',
    }));
  }

  clearFilters() {
    this.shoesList = [...this.allShoesList];
    this.searchQuery = '';
    this.isFiltered = false;
  }
}

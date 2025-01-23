import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { MarketRequest } from 'src/app/interfaces/market-request.interface';
import { Product } from 'src/app/interfaces/products.interface';
import { Shoes } from 'src/app/models/shoes';
import { MarketRequestService } from 'src/app/services/market-request.service';
import { ShoesListService } from 'src/app/services/shoes-list.service';

@Component({
  selector: 'app-shoes-detail',
  templateUrl: './shoes-detail.component.html',
  styleUrls: ['./shoes-detail.component.scss'],
})
export class ShoesDetailComponent {
  shoes?: Shoes;
  private route = inject(ActivatedRoute);
  private shoesListService = inject(ShoesListService);
  private shoesList: Product[] = [];
  responses: string[][] = [];
  private marketRequestService = inject(MarketRequestService);
  responseData: any;
  userComment: string = '';
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

  marketRequestData: MarketRequest = {
    query: '',
    session_id: 'usuario_123',
    id_producto: 1,
    secret_key: 'l2umfnx@tz=pnfm2&j*\\$oxpq_7r)-=ud*7\\$v149ss*9(vnk4-8',
  };

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shoesListService.getProducts().subscribe((data) => {
      this.shoesList = data.productos.map((product) => ({
        ...product,
        imageUrl: this.productImages[product.id] || 'assets/images/default.jpg',
      }));

      this.shoes = this.shoesList.find((product) => product.id === id);
    });
  }

  sendRequest() {
    if (!this.userComment.trim()) {
      console.warn('El comentario no puede estar vacío.');
      return;
    }

    this.marketRequestData.query = this.userComment;
    console.log('Enviando solicitud con comentario:', this.userComment);

    this.marketRequestService
      .sendMarketRequest(this.marketRequestData)
      .pipe(
        tap({
          next: (response) => {
            this.responseData = response.response.respuesta;
            this.responses.unshift(this.responseData);
            console.log('Respuesta del servidor:', response);
          },
          error: (error) => {
            console.error('Error al enviar la solicitud:', error);
          },
        })
      )
      .subscribe();

    this.userComment = '';
  }
}

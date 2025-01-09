import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Shoes } from 'src/app/models/shoes';
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

  ngOnInit(): void {
    /* const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shoes = this.shoesListService.getShoesById(id); */
  }
}

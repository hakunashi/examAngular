import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../shared/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductListComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  service = inject(ProductService);
  cart = this.service.fetchAllCart();
}

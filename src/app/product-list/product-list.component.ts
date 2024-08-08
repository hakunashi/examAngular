import { Component, inject } from '@angular/core';
import { IProduct } from '../../shared/IProduct';
import { ProductService } from '../../shared/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.sass',
})
export class ProductListComponent {
  service = inject(ProductService);
  products: IProduct[] = this.service.fetchAllProduct();
  quantity: number = 0;

  removeOneQuantity(product: IProduct) {
    if (product.quantite > 0) {
      product.quantite--;
    }
  }

  addOneQuantity(product: IProduct) {
    product.quantite++;
  }

  addToCard(product: IProduct) {
    //créer une copie de l'objet avec sa quantité actuel
    let productToAdd = { ...product };
    //si la quantité est supérieur a 0 au moment de l'evenement se lance
    if (productToAdd.quantite > 0) {
      this.service.addToCart(productToAdd);
      product.quantite = 0;
    }
  }
}

import { Injectable } from '@angular/core';
import { mockCart, mockProduct } from './mock';
import { IProduct } from './IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  fetchAllProduct() {
    return mockProduct;
  }

  fetchAllCart() {
    return mockCart;
  }

  getTotal() {
    let total = 0;
    mockCart.forEach((product) => (total += product.quantite));
    return total;
  }

  getTotalPrice() {
    let totalHT = 0;
    mockCart.forEach(
      (product) => (totalHT += product.prixHT * product.quantite)
    );
    return totalHT;
  }

  addToCart(product: IProduct) {
    //permet de verifier si un produit est present
    let present = false;
    mockCart.forEach((productPara) => {
      //explore le panier et si il trouve une correspondance modifier la quantité
      if (productPara.id === product.id) {
        productPara.quantite += product.quantite;
        present = true;
      }
    });
    //si il n'y a pas de correspondance, ajouter le produit au tableau
    if (!present) {
      mockCart.push(product);
    }
  }

  removeFromCard(productId: IProduct) {
    const found: any = mockCart.find((product) => product === productId);
    const index = mockCart.indexOf(found);
    console.log(index);
    mockCart.splice(index, 1);
  }

  removeAll() {
    //suppression de toutes les entreés (ne peut pas être assigner a un [] car c'est un import)
    mockCart.splice(0, mockCart.length);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../../data/products';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',

})
export class ProductList {
  products: Product[] = PRODUCTS;
  getStars(rating: number): string[] {
    const full = Math.round(rating); // округляем 4.7 -> 5, 4.2 -> 4
    return Array.from({ length: 5 }, (_, i) => (i < full ? '★' : '☆'));
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-RU');
  }
  getWhatsAppLink(product: Product): string {
    const text = `Check out this product: ${product.name} ${product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }
}

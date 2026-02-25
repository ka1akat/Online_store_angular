import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRODUCTS } from '../../../data/products';
import { Product } from '../../../models/product.model';
import { categories } from '../../../data/categories';
import { Category } from '../../../models/category.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',

})
export class ProductList {
  @Input() products: Product[] = [];
  @Output() delete = new EventEmitter<number>();
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

  categories: Category[] = categories;

  selectedCategoryId: number = 1;

  get filteredProducts() {
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }
  like(product: Product) {
    product.likes++;
  }
  deleteProduct(id: number) {
    this.delete.emit(id);
  }
}

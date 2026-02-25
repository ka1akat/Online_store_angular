import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { categories } from './data/categories';
import { PRODUCTS } from './data/products';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

import { ProductList } from './features/products/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  categories: Category[] = categories;
  products: Product[] = PRODUCTS;

  selectedCategoryId: number | null = null;

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  get selectedProducts(): Product[] {
    if (this.selectedCategoryId === null) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }
  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}

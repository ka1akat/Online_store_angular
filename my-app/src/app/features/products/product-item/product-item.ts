import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css'],
})
export class ProductItemComponent {
  //Получаем товар от родителя
  @Input() product!: Product;

  //Сообщаем родителю, что пользователь хочет удалить товар
  @Output() delete = new EventEmitter<number>();

  //лайк увеличиваем счетчик прямо в объекте
  liked = false;

  like() {
    this.product.likes++;
    this.liked = true;
    setTimeout(() => (this.liked = false), 200);
  }

  //отправляем id наверх
  onDelete() {
    const ok = confirm(`Delete "${this.product.name}"?`);
    if (!ok) return;

    this.delete.emit(this.product.id);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-RU');
  }

  getWhatsAppLink(): string {
    const text = `Check out this product: ${this.product.name} ${this.product.link}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  }

  getStars(rating: number): string[] {
    const full = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => (i < full ? '★' : '☆'));
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService, CartItem } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.components.html',
  styleUrl: './carrito.components.css'
})
export class CarritoComponent {
  private cartService = inject(CartService);
  cartItems$ = this.cartService.cartItems$;

  getTotal() {
    return this.cartService.getTotal();
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  downloadXML() {
    this.cartService.downloadXML();
  }
}
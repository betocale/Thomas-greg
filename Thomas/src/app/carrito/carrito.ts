import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ProductoCarrito {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito: ProductoCarrito[] = [];
  subtotal: number = 0;
  descuento: number = 0;
  total: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.cargarCarrito();
    this.calcularTotales();
  }

  // =====================================
  // CARGAR CARRITO
  // =====================================
  cargarCarrito(): void {
    const datos = localStorage.getItem('beto_shop_carrito');
    if (datos) {
      this.carrito = JSON.parse(datos);
    }
  }

  // =====================================
  // GUARDAR CARRITO
  // =====================================
  guardarCarrito(): void {
    localStorage.setItem('beto_shop_carrito', JSON.stringify(this.carrito));
  }

  // =====================================
  // AUMENTAR CANTIDAD
  // =====================================
  aumentarCantidad(producto: ProductoCarrito): void {
    producto.cantidad++;
    this.actualizar();
  }

  // =====================================
  // DISMINUIR CANTIDAD
  // =====================================
  disminuirCantidad(producto: ProductoCarrito): void {
    if (producto.cantidad > 1) {
      producto.cantidad--;
    }
    this.actualizar();
  }

  // =====================================
  // ELIMINAR PRODUCTO
  // =====================================
  eliminarProducto(id: number): void {
    this.carrito = this.carrito.filter(producto => producto.id !== id);
    this.actualizar();
  }

  // =====================================
  // VACIAR CARRITO
  // =====================================
  vaciarCarrito(): void {
    this.carrito = [];
    this.actualizar();
  }

  // =====================================
  // ACTUALIZAR DATOS
  // =====================================
  actualizar(): void {
    this.guardarCarrito();
    this.calcularTotales();
  }

  // =====================================
  // CÁLCULOS
  // =====================================
  calcularTotales(): void {
    this.subtotal = this.carrito.reduce(
      (total, producto) => total + (producto.precio * producto.cantidad),
      0
    );

    /*
      Regla de negocio:
      Si la compra es mayor o igual a 1.000.000,
      aplica un 10% de descuento.
    */
    if (this.subtotal >= 1000000) {
      this.descuento = this.subtotal * 0.10;
    } else {
      this.descuento = 0;
    }

    this.total = this.subtotal - this.descuento;
  }

  // =====================================
  // CANTIDAD TOTAL PRODUCTOS
  // =====================================
  get cantidadProductos(): number {
    return this.carrito.reduce(
      (cantidad, producto) => cantidad + producto.cantidad,
      0
    );
  }

}

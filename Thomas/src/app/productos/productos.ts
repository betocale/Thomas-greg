import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router'; // 1. Importa RouterOutlet

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: string;
  stock: 'disponible' | 'agotado';
  imagen: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet], // 2. Agrégalo aquí
  templateUrl: './productos.html',
  styleUrls: ['./productos.css']
})
export class ProductosComponent {
  
  textoBusqueda: string = '';
  categoriaSeleccionada: string = 'Todas las categorías';

  listaProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Dell Inspiron 15',
      categoria: 'Computadores',
      descripcion: 'Intel Core i7 · 16GB RAM · SSD 512GB',
      precio: '$3.499.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      nombre: 'iPhone 16 Pro Max',
      categoria: 'Celulares',
      descripcion: '512GB · Titanio Natural',
      precio: '$7.999.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      nombre: 'LG UltraWide 34"',
      categoria: 'Monitores',
      descripcion: 'IPS · 144Hz · HDR10',
      precio: '$1.899.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1587825140708-1e3f0b5c6f4d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      nombre: 'Samsung Galaxy Tab S10',
      categoria: 'Tabletas',
      descripcion: '256GB · S Pen',
      precio: '$3.299.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      nombre: 'Logitech G Pro X',
      categoria: 'Accesorios',
      descripcion: 'Audífonos Gamer RGB',
      precio: '$649.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      nombre: 'MacBook Air M4',
      categoria: 'Computadores',
      descripcion: 'Chip Apple M4 · 16GB',
      precio: '$6.299.900',
      stock: 'agotado',
      imagen: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      nombre: 'RTX 5090',
      categoria: 'Componentes',
      descripcion: 'NVIDIA 32GB GDDR7',
      precio: '$12.999.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      nombre: 'Lenovo Legion 7',
      categoria: 'Computadores',
      descripcion: 'Ryzen 9 · RTX 5080',
      precio: '$10.499.900',
      stock: 'disponible',
      imagen: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  get productosFiltrados(): Producto[] {
    return this.listaProductos.filter(producto => {
      const coincideTexto = producto.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
                            producto.descripcion.toLowerCase().includes(this.textoBusqueda.toLowerCase());
      
      const coincideCategoria = this.categoriaSeleccionada === 'Todas las categorías' || 
                                producto.categoria === this.categoriaSeleccionada;

      return coincideTexto && coincideCategoria;
    });
  }

  verDetalle(producto: Producto) {
    console.log('Ver detalle de:', producto.nombre);
  }

  agregarAlCarrito(producto: Producto) {
    console.log('Agregado al carrito:', producto.nombre);
  }
  
 volver(): void {
  // Lógica para regresar a la página anterior
  window.history.back();
}

}
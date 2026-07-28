import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  estado: string;
  imagen?: string;
  descripcion?: string;
}

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet
  ],
  templateUrl: './inventario.html',
  styleUrls: ['./inventario.css']
})
export class InventarioComponent {

  // Control del formulario
  mostrarFormulario: boolean = false;

  // Buscador
  textoBusqueda: string = '';

  // Formulario
  nuevoProducto = {
    nombre: '',
    categoria: '',
    precio: 0,
    stock: 0,
    imagen: '',
    descripcion: ''
  };

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Dell Inspiron',
      categoria: 'Computadores',
      precio: 3499900,
      stock: 10,
      estado: 'Disponible',
      imagen: '',
      descripcion: ''
    },
    {
      id: 2,
      nombre: 'iPhone 16 Pro Max',
      categoria: 'Celulares',
      precio: 7999900,
      stock: 5,
      estado: 'Disponible',
      imagen: '',
      descripcion: ''
    },
    {
      id: 3,
      nombre: 'RTX 5090',
      categoria: 'Componentes',
      precio: 12999900,
      stock: 2,
      estado: 'Disponible',
      imagen: '',
      descripcion: ''
    },
    {
      id: 4,
      nombre: 'Samsung Galaxy Tab S10',
      categoria: 'Tabletas',
      precio: 3299900,
      stock: 0,
      estado: 'Agotado',
      imagen: '',
      descripcion: ''
    }
  ];

  get productosFiltrados(): Producto[] {
    if (!this.textoBusqueda) {
      return this.productos;
    }

    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }

  guardarProducto(): void {
    if (
      !this.nuevoProducto.nombre ||
      !this.nuevoProducto.categoria
    ) {
      alert('Complete todos los campos obligatorios');
      return;
    }

    this.productos.push({
      id: this.productos.length + 1,
      nombre: this.nuevoProducto.nombre,
      categoria: this.nuevoProducto.categoria,
      precio: this.nuevoProducto.precio,
      stock: this.nuevoProducto.stock,
      imagen: this.nuevoProducto.imagen,
      descripcion: this.nuevoProducto.descripcion,
      estado: this.nuevoProducto.stock > 0 ? 'Disponible' : 'Agotado'
    });

    this.nuevoProducto = {
      nombre: '',
      categoria: '',
      precio: 0,
      stock: 0,
      imagen: '',
      descripcion: ''
    };

    this.mostrarFormulario = false;
  }

  eliminarProducto(id: number): void {
    if (confirm('¿Desea eliminar este producto?')) {
      this.productos = this.productos.filter(
        producto => producto.id !== id
      );
    }
  }

  editarProducto(producto: Producto): void {
    alert('Editar: ' + producto.nombre);
  }

}
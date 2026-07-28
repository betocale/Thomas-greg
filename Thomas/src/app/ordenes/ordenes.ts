import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Orden {

  id: number;
  cliente: string;
  producto: string;
  fecha: string;
  total: number;
  metodoPago: string;
  transportadora: string;
  guia: string;
  estado: string;

}

@Component({
  selector: 'app-ordenes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './ordenes.html',
  styleUrls: ['./ordenes.css']
})
export class OrdenesComponent {

  textoBusqueda: string = '';
  estadoFiltro: string = '';

  ordenes: Orden[] = [

    {
      id: 1001,
      cliente: 'Juan Pérez',
      producto: 'Laptop Dell Inspiron 15',
      fecha: '01/07/2026',
      total: 3499900,
      metodoPago: 'Tarjeta Crédito',
      transportadora: 'Servientrega',
      guia: 'SV123456',
      estado: 'Pendiente'
    },

    {
      id: 1002,
      cliente: 'Laura Gómez',
      producto: 'iPhone 16 Pro Max',
      fecha: '02/07/2026',
      total: 7999900,
      metodoPago: 'PSE',
      transportadora: 'Coordinadora',
      guia: 'CO987654',
      estado: 'Pagado'
    },

    {
      id: 1003,
      cliente: 'Carlos Rodríguez',
      producto: 'RTX 5090',
      fecha: '03/07/2026',
      total: 12999900,
      metodoPago: 'Nequi',
      transportadora: 'Interrapidísimo',
      guia: 'IR654321',
      estado: 'Preparando'
    },

    {
      id: 1004,
      cliente: 'María López',
      producto: 'Samsung Galaxy S25 Ultra',
      fecha: '04/07/2026',
      total: 6899900,
      metodoPago: 'Daviplata',
      transportadora: 'Servientrega',
      guia: 'SV456321',
      estado: 'Enviado'
    },

    {
      id: 1005,
      cliente: 'Pedro Sánchez',
      producto: 'PlayStation 5 Pro',
      fecha: '05/07/2026',
      total: 3999900,
      metodoPago: 'Tarjeta Débito',
      transportadora: 'Coordinadora',
      guia: 'CO123987',
      estado: 'En camino'
    },

    {
      id: 1006,
      cliente: 'Ana Torres',
      producto: 'MacBook Air M4',
      fecha: '06/07/2026',
      total: 6299900,
      metodoPago: 'PSE',
      transportadora: 'Servientrega',
      guia: 'SV852369',
      estado: 'Entregado'
    },

    {
      id: 1007,
      cliente: 'Jorge Díaz',
      producto: 'Logitech G Pro X',
      fecha: '07/07/2026',
      total: 649900,
      metodoPago: 'Efectivo',
      transportadora: 'Interrapidísimo',
      guia: 'IR987321',
      estado: 'Cancelado'
    },

    {
      id: 1008,
      cliente: 'Camila Ruiz',
      producto: 'Lenovo Legion 7',
      fecha: '08/07/2026',
      total: 10499900,
      metodoPago: 'Tarjeta Crédito',
      transportadora: 'Servientrega',
      guia: 'SV741852',
      estado: 'Entregado'
    },

    {
      id: 1009,
      cliente: 'Andrés Castro',
      producto: 'Apple Watch Ultra 2',
      fecha: '09/07/2026',
      total: 4199900,
      metodoPago: 'PSE',
      transportadora: 'Coordinadora',
      guia: 'CO852147',
      estado: 'Pendiente'
    },

    {
      id: 1010,
      cliente: 'Natalia Herrera',
      producto: 'GoPro Hero 13',
      fecha: '10/07/2026',
      total: 2499900,
      metodoPago: 'Nequi',
      transportadora: 'Servientrega',
      guia: 'SV963258',
      estado: 'Enviado'
    }

  ];

  get ordenesFiltradas(): Orden[] {

    return this.ordenes.filter(orden => {

      const buscar =
        orden.cliente.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        orden.producto.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        orden.guia.toLowerCase().includes(this.textoBusqueda.toLowerCase());

      const estado =
        this.estadoFiltro === '' ||
        orden.estado === this.estadoFiltro;

      return buscar && estado;

    });

  }

  get totalOrdenes(): number {
    return this.ordenes.length;
  }

  get pendientes(): number {
    return this.ordenes.filter(x => x.estado === 'Pendiente').length;
  }

  get preparando(): number {
    return this.ordenes.filter(x => x.estado === 'Preparando').length;
  }

  get entregadas(): number {
    return this.ordenes.filter(x => x.estado === 'Entregado').length;
  }

  get canceladas(): number {
    return this.ordenes.filter(x => x.estado === 'Cancelado').length;
  }

  get ingresos(): number {

    return this.ordenes
      .filter(x => x.estado !== 'Cancelado')
      .reduce((total, orden) => total + orden.total, 0);

  }

  nuevaOrden(): void {

    alert('Nueva orden.');

  }

  verOrden(orden: Orden): void {

    alert(
      `Orden #${orden.id}\n\n` +
      `Cliente: ${orden.cliente}\n` +
      `Producto: ${orden.producto}\n` +
      `Estado: ${orden.estado}`
    );

  }

  editarOrden(orden: Orden): void {

    alert(`Editar orden #${orden.id}`);

  }

  actualizarEstado(orden: Orden): void {

    const estados = [
      'Pendiente',
      'Pagado',
      'Preparando',
      'Enviado',
      'En camino',
      'Entregado'
    ];

    const indice = estados.indexOf(orden.estado);

    if (indice < estados.length - 1) {

      orden.estado = estados[indice + 1];

    } else {

      orden.estado = 'Entregado';

    }

    alert(`Estado actualizado a: ${orden.estado}`);

  }

  eliminarOrden(id: number): void {

    if (confirm('¿Desea eliminar esta orden?')) {

      this.ordenes = this.ordenes.filter(x => x.id !== id);

    }

  }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Venta {
  id: number;
  fecha: string;
  cliente: string;
  producto: string;
  cantidad: number;
  total: number;
  estado: 'Pagado' | 'Pendiente' | 'Cancelado';
}

interface TopProducto {
  nombre: string;
  cantidad: number;
}

@Component({
  selector: 'app-reportes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './reportes.html',
  styleUrls: ['./reportes.css']
})
export class ReportesComponent {

  fechaInicio = '';
  fechaFin = '';
  textoBusqueda = '';
  estadoSeleccionado = '';

  totalVentas = 187450000;
  totalPedidos = 30;
  totalClientes = 24;
  totalProductos = 112;
  ganancias = 56840000;
  promedioVenta = 6248333;

  topProductos: TopProducto[] = [
    { nombre: 'Laptop Dell Inspiron 15', cantidad: 35 },
    { nombre: 'iPhone 16 Pro Max', cantidad: 28 },
    { nombre: 'RTX 5090', cantidad: 20 },
    { nombre: 'MacBook Air M4', cantidad: 18 },
    { nombre: 'PlayStation 5 Pro', cantidad: 15 }
  ];

  ventas: Venta[] = [

    {
      id:1,
      fecha:'2026-07-01',
      cliente:'Carlos Pérez',
      producto:'Laptop Dell Inspiron 15',
      cantidad:1,
      total:3499900,
      estado:'Pagado'
    },

    {
      id:2,
      fecha:'2026-07-02',
      cliente:'María Gómez',
      producto:'iPhone 16 Pro Max',
      cantidad:1,
      total:7999900,
      estado:'Pagado'
    },

    {
      id:3,
      fecha:'2026-07-03',
      cliente:'Luis Torres',
      producto:'Samsung Galaxy S25 Ultra',
      cantidad:1,
      total:6899900,
      estado:'Pendiente'
    },

    {
      id:4,
      fecha:'2026-07-04',
      cliente:'Laura Díaz',
      producto:'MacBook Air M4',
      cantidad:1,
      total:6299900,
      estado:'Pagado'
    },

    {
      id:5,
      fecha:'2026-07-05',
      cliente:'Juan López',
      producto:'RTX 5090',
      cantidad:1,
      total:12999900,
      estado:'Pagado'
    },

    {
      id:6,
      fecha:'2026-07-05',
      cliente:'Andrés Rojas',
      producto:'LG UltraWide',
      cantidad:2,
      total:3799800,
      estado:'Pagado'
    },

    {
      id:7,
      fecha:'2026-07-06',
      cliente:'Camila Ruiz',
      producto:'Samsung Tab S10',
      cantidad:1,
      total:3299900,
      estado:'Pendiente'
    },

    {
      id:8,
      fecha:'2026-07-07',
      cliente:'Jhon Medina',
      producto:'PlayStation 5 Pro',
      cantidad:1,
      total:3999900,
      estado:'Pagado'
    },

    {
      id:9,
      fecha:'2026-07-08',
      cliente:'Natalia Cruz',
      producto:'Xbox Series X',
      cantidad:1,
      total:2999900,
      estado:'Pagado'
    },

    {
      id:10,
      fecha:'2026-07-09',
      cliente:'David León',
      producto:'Apple Watch Ultra 2',
      cantidad:1,
      total:4199900,
      estado:'Cancelado'
    },

    {
      id:11,
      fecha:'2026-07-10',
      cliente:'Sandra Mora',
      producto:'GoPro Hero 13',
      cantidad:2,
      total:4999800,
      estado:'Pagado'
    },

    {
      id:12,
      fecha:'2026-07-10',
      cliente:'Jorge Martínez',
      producto:'DJI Mini 4 Pro',
      cantidad:1,
      total:4999900,
      estado:'Pagado'
    },

    {
      id:13,
      fecha:'2026-07-11',
      cliente:'Cristian Gómez',
      producto:'HyperX Cloud III',
      cantidad:2,
      total:1099800,
      estado:'Pagado'
    },

    {
      id:14,
      fecha:'2026-07-12',
      cliente:'Diana Pérez',
      producto:'RTX 5080',
      cantidad:1,
      total:8999900,
      estado:'Pendiente'
    },

    {
      id:15,
      fecha:'2026-07-13',
      cliente:'Felipe Castro',
      producto:'Lenovo Legion 7',
      cantidad:1,
      total:10499900,
      estado:'Pagado'
    },

    {
      id:16,
      fecha:'2026-07-13',
      cliente:'Miguel Díaz',
      producto:'AMD Ryzen 9',
      cantidad:2,
      total:7999800,
      estado:'Pagado'
    },

    {
      id:17,
      fecha:'2026-07-14',
      cliente:'Sara López',
      producto:'Intel Core Ultra 9',
      cantidad:1,
      total:4299900,
      estado:'Cancelado'
    },

    {
      id:18,
      fecha:'2026-07-15',
      cliente:'Daniel Ruiz',
      producto:'Logitech MX Master 3S',
      cantidad:3,
      total:1499700,
      estado:'Pagado'
    },

    {
      id:19,
      fecha:'2026-07-16',
      cliente:'Paula Sánchez',
      producto:'Razer BlackWidow',
      cantidad:2,
      total:1399800,
      estado:'Pagado'
    },

    {
      id:20,
      fecha:'2026-07-16',
      cliente:'Mateo Ramírez',
      producto:'Nintendo Switch OLED',
      cantidad:1,
      total:1899900,
      estado:'Pagado'
    },

    {
      id:21,
      fecha:'2026-07-17',
      cliente:'Julián Herrera',
      producto:'Google Pixel 9',
      cantidad:1,
      total:4999900,
      estado:'Pagado'
    },

    {
      id:22,
      fecha:'2026-07-18',
      cliente:'Kelly Vargas',
      producto:'Motorola Edge 60',
      cantidad:1,
      total:3299900,
      estado:'Pendiente'
    },

    {
      id:23,
      fecha:'2026-07-18',
      cliente:'Tatiana Silva',
      producto:'HP Victus 16',
      cantidad:1,
      total:5999900,
      estado:'Pagado'
    },

    {
      id:24,
      fecha:'2026-07-19',
      cliente:'Oscar Muñoz',
      producto:'ASUS ROG Strix',
      cantidad:1,
      total:8999900,
      estado:'Pagado'
    },

    {
      id:25,
      fecha:'2026-07-20',
      cliente:'Ricardo Gómez',
      producto:'iPad Pro M4',
      cantidad:1,
      total:6799900,
      estado:'Pagado'
    },

    {
      id:26,
      fecha:'2026-07-20',
      cliente:'Camilo Pérez',
      producto:'Lenovo Tab P12',
      cantidad:2,
      total:3999800,
      estado:'Pagado'
    },

    {
      id:27,
      fecha:'2026-07-21',
      cliente:'Karen Molina',
      producto:'ASUS TUF Gaming',
      cantidad:1,
      total:1499900,
      estado:'Cancelado'
    },

    {
      id:28,
      fecha:'2026-07-22',
      cliente:'Ángela Torres',
      producto:'Logitech G Pro X',
      cantidad:2,
      total:1299800,
      estado:'Pagado'
    },

    {
      id:29,
      fecha:'2026-07-23',
      cliente:'Brayan Rodríguez',
      producto:'Xiaomi 15 Pro',
      cantidad:1,
      total:4299900,
      estado:'Pendiente'
    },

    {
      id:30,
      fecha:'2026-07-24',
      cliente:'Valentina Romero',
      producto:'MacBook Air M4',
      cantidad:1,
      total:6299900,
      estado:'Pagado'
    }

  ];

  get ventasFiltradas(): Venta[] {

    return this.ventas.filter(venta => {

      const texto =
        venta.cliente.toLowerCase().includes(this.textoBusqueda.toLowerCase()) ||
        venta.producto.toLowerCase().includes(this.textoBusqueda.toLowerCase());

      const estado =
        this.estadoSeleccionado === '' ||
        venta.estado === this.estadoSeleccionado;

      return texto && estado;

    });

  }

  exportarPDF(): void {
    alert('Reporte exportado en PDF.');
  }

  exportarExcel(): void {
    alert('Reporte exportado en Excel.');
  }

  imprimirReporte(): void {
    window.print();
  }

  verVenta(venta: Venta): void {

    alert(
`Venta #${venta.id}

Cliente: ${venta.cliente}
Producto: ${venta.producto}
Cantidad: ${venta.cantidad}
Total: $${venta.total.toLocaleString('es-CO')}
Estado: ${venta.estado}`
    );
  }
}
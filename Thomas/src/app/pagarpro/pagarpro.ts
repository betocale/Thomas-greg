import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cliente {
  nombre: string;
  correo: string;
  telefono: string;
  documento: string;
  departamento: string;
  ciudad: string;
  direccion: string;
  codigoPostal: string;
}

interface Tarjeta {
  numero: string;
  nombre: string;
  fecha: string;
  cvv: string;
}

interface ItemCarrito {
  nombre: string;
  cantidad: number;
  precio: string;
  valor: number;
}

@Component({
  selector: 'app-pagarpro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './pagarpro.html',
  styleUrls: ['./pagarpro.css']
})
export class PagarProComponent {

  constructor(private location: Location) {}

  cliente: Cliente = {
    nombre: '',
    correo: '',
    telefono: '',
    documento: '',
    departamento: '',
    ciudad: '',
    direccion: '',
    codigoPostal: ''
  };

  metodoPago = 'Tarjeta de Crédito';

  tarjeta: Tarjeta = {
    numero: '',
    nombre: '',
    fecha: '',
    cvv: ''
  };

  carrito: ItemCarrito[] = [
    {
      nombre: 'Laptop Dell Inspiron 15',
      cantidad: 1,
      precio: '$3.499.900',
      valor: 3499900
    },
    {
      nombre: 'Mouse Logitech MX Master 3S',
      cantidad: 1,
      precio: '$499.900',
      valor: 499900
    },
    {
      nombre: 'Monitor LG UltraWide 34"',
      cantidad: 1,
      precio: '$1.899.900',
      valor: 1899900
    }
  ];

  subtotal = '$5.899.700';
  iva = '$1.120.943';
  envio = '$25.000';
  total = '$7.045.643';

  confirmarCompra(): void {

    if (
      this.cliente.nombre.trim() === '' ||
      this.cliente.correo.trim() === '' ||
      this.cliente.telefono.trim() === '' ||
      this.cliente.direccion.trim() === ''
    ) {
      alert('Complete todos los datos del cliente.');
      return;
    }

    if (
      (this.metodoPago === 'Tarjeta de Crédito' ||
        this.metodoPago === 'Tarjeta Débito') &&
      (
        this.tarjeta.numero.trim() === '' ||
        this.tarjeta.nombre.trim() === '' ||
        this.tarjeta.fecha.trim() === '' ||
        this.tarjeta.cvv.trim() === ''
      )
    ) {
      alert('Complete la información de la tarjeta.');
      return;
    }

    alert(
      '✅ Compra realizada correctamente.\n\n' +
      'Cliente: ' + this.cliente.nombre +
      '\nMétodo de pago: ' + this.metodoPago +
      '\nTotal: ' + this.total
    );

    this.limpiarFormulario();
  }

  limpiarFormulario(): void {

    this.cliente = {
      nombre: '',
      correo: '',
      telefono: '',
      documento: '',
      departamento: '',
      ciudad: '',
      direccion: '',
      codigoPostal: ''
    };

    this.tarjeta = {
      numero: '',
      nombre: '',
      fecha: '',
      cvv: ''
    };

    this.metodoPago = 'Tarjeta de Crédito';
  }

  volver(): void {
    this.location.back();
  }

}
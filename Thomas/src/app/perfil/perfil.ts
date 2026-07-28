import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {

  nombre: string;
  correo: string;
  telefono: string;
  documento: string;
  ciudad: string;
  direccion: string;
  fechaNacimiento: string;
  password: string;
  rol: string;

}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {

  constructor(private location: Location) {}

  usuario: Usuario = {

    nombre: 'Humberto Asprilla',
    correo: 'humberto@betoshop.com',
    telefono: '3001234567',
    documento: '1234567890',
    ciudad: 'Bogotá',
    direccion: 'Calle 123 #45-67',
    fechaNacimiento: '2000-01-01',
    password: '123456',
    rol: 'Administrador'

  };

  compras = 28;
  pedidos = 14;
  favoritos = 52;
  puntos = 1250;

  guardarCambios(): void {

    alert('✅ Información actualizada correctamente.');

    console.log('Usuario actualizado:', this.usuario);

  }

  volver(): void {

    this.location.back();

  }

  cambiarFoto(): void {

    alert('Aquí podrás implementar la carga de una nueva foto de perfil.');

  }

  eliminarCuenta(): void {

    const confirmar = confirm(
      '¿Está seguro de eliminar su cuenta? Esta acción no se puede deshacer.'
    );

    if (confirmar) {

      alert('Cuenta eliminada correctamente.');

      console.log('Cuenta eliminada.');

    }

  }

  cerrarSesion(): void {

    alert('Sesión cerrada correctamente.');

    console.log('Cerrar sesión');

  }

}
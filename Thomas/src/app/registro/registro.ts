import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: 'registro.html',
  styleUrl: 'registro.css'
})
export class RegistroComponent {

  usuario = {
    nombre: '',
    correo: '',
    telefono: '',
    rol: '',
    password: '',
    confirmarPassword: ''
  };

  registrar() {
    console.log(this.usuario);
  }

}
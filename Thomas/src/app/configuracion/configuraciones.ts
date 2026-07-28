import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './configuracion.html',
  styleUrls: ['./configuracion.css']
})
export class ConfiguracionComponent {

  // Información del usuario
  usuario = {
    nombre: 'Administrador',
    correo: 'admin@betoshop.com',
    telefono: '3001234567',
    empresa: 'Beto Shop'
  };

  // Configuración general
  configuracion = {
    temaOscuro: false,
    notificaciones: true,
    modoMantenimiento: false,
    auditoria: true,
    respaldoAutomatico: true,
    idioma: 'Español',
    moneda: 'COP',
    zonaHoraria: 'America/Bogota'
  };

  guardarConfiguracion(): void {

    localStorage.setItem(
      'configuracion',
      JSON.stringify(this.configuracion)
    );

    alert('La configuración fue guardada correctamente.');

  }

  restablecer(): void {

    if (confirm('¿Desea restablecer toda la configuración?')) {

      this.configuracion = {
        temaOscuro: false,
        notificaciones: true,
        modoMantenimiento: false,
        auditoria: true,
        respaldoAutomatico: true,
        idioma: 'Español',
        moneda: 'COP',
        zonaHoraria: 'America/Bogota'
      };

      alert('La configuración fue restablecida.');

    }

  }

  cerrarSesion(): void {

    if (confirm('¿Está seguro de cerrar la sesión?')) {

      localStorage.removeItem('usuario');
      localStorage.removeItem('token');

      window.location.href = '/inicio-seccion';

    }

  }

  ngOnInit(): void {

    const datos = localStorage.getItem('configuracion');

    if (datos) {
      this.configuracion = JSON.parse(datos);
    }

  }

}
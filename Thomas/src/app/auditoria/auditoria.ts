import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface RegistroAuditoria {

  id: number;
  fecha: string;
  hora: string;
  usuario: string;
  modulo: string;
  accion: string;
  descripcion: string;
  ip: string;
  estado: string;

}

@Component({
  selector: 'app-auditoria',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './auditoria.html',
  styleUrl: './auditoria.css'
})
export class AuditoriaComponent {

  constructor(private router: Router){}

  buscar: string = '';
  filtroModulo: string = '';

  registros: RegistroAuditoria[] = [

    {
      id:1,
      fecha:'27/07/2026',
      hora:'08:15',
      usuario:'Administrador',
      modulo:'Usuarios',
      accion:'Crear',
      descripcion:'Se creó un nuevo usuario.',
      ip:'192.168.1.10',
      estado:'Exito'
    },

    {
      id:2,
      fecha:'27/07/2026',
      hora:'09:05',
      usuario:'Carlos Gómez',
      modulo:'Productos',
      accion:'Actualizar',
      descripcion:'Actualizó el precio del producto Laptop Dell.',
      ip:'192.168.1.25',
      estado:'Exito'
    },

    {
      id:3,
      fecha:'27/07/2026',
      hora:'10:22',
      usuario:'Laura Díaz',
      modulo:'Inventario',
      accion:'Eliminar',
      descripcion:'Eliminó un producto del inventario.',
      ip:'192.168.1.30',
      estado:'Advertencia'
    },

    {
      id:4,
      fecha:'27/07/2026',
      hora:'11:45',
      usuario:'Administrador',
      modulo:'Pedidos',
      accion:'Crear',
      descripcion:'Registró un nuevo pedido.',
      ip:'192.168.1.40',
      estado:'Exito'
    },

    {
      id:5,
      fecha:'27/07/2026',
      hora:'12:30',
      usuario:'Juan Pérez',
      modulo:'Configuración',
      accion:'Modificar',
      descripcion:'Actualizó la configuración del sistema.',
      ip:'192.168.1.12',
      estado:'Exito'
    },

    {
      id:6,
      fecha:'27/07/2026',
      hora:'13:10',
      usuario:'María López',
      modulo:'Productos',
      accion:'Eliminar',
      descripcion:'Intentó eliminar un producto protegido.',
      ip:'192.168.1.50',
      estado:'Error'
    },

    {
      id:7,
      fecha:'27/07/2026',
      hora:'14:55',
      usuario:'Administrador',
      modulo:'Inventario',
      accion:'Actualizar',
      descripcion:'Actualizó el stock del inventario.',
      ip:'192.168.1.18',
      estado:'Exito'
    },

    {
      id:8,
      fecha:'27/07/2026',
      hora:'15:40',
      usuario:'Pedro Ramírez',
      modulo:'Pedidos',
      accion:'Cancelar',
      descripcion:'Canceló un pedido.',
      ip:'192.168.1.60',
      estado:'Advertencia'
    }

  ];

  get registrosFiltrados(): RegistroAuditoria[] {

    return this.registros.filter(registro => {

      const coincideBusqueda =

      registro.usuario.toLowerCase().includes(this.buscar.toLowerCase()) ||

      registro.accion.toLowerCase().includes(this.buscar.toLowerCase()) ||

      registro.modulo.toLowerCase().includes(this.buscar.toLowerCase()) ||

      registro.descripcion.toLowerCase().includes(this.buscar.toLowerCase());

      const coincideModulo =

      this.filtroModulo === '' ||

      registro.modulo === this.filtroModulo;

      return coincideBusqueda && coincideModulo;

    });

  }

  get totalRegistros(): number{

    return this.registros.length;

  }

  get ingresosHoy(): number{

    return this.registros.length;

  }

  get usuariosActivos(): number{

    return new Set(this.registros.map(r=>r.usuario)).size;

  }

  get errores(): number{

    return this.registros.filter(r=>r.estado === 'Error').length;

  }

  volver(): void{

    this.router.navigate(['/productos']);

  }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'inicio-seccion.html',
  styleUrls: ['inicio-seccion.css']
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault();
    // Aquí puedes implementar la lógica de autenticación real
    console.log('Autenticando usuario...');
    
    // Ejemplo de redirección al panel principal tras iniciar sesión con éxito
    this.router.navigate(['/productos']);
  }

  irARegistro(): void {
  this.router.navigate(['/registro']);
}


}
import { Component, signal } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Beto Shop');

  constructor(private router: Router) {}

  iniciarSesion(): void {
    // Redirige o abre la vista de login
    this.router.navigate(['./inicio-seccion']);
  }

  verDocumentacion(): void {
    // Enlace o lógica de documentación
    window.open('https://angular.dev', '_blank');
  }
}
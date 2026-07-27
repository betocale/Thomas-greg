import { Routes } from '@angular/router';
import { App } from './app';
import { LoginComponent } from './inicio-seccion/inicio-seccion'; // (O el componente que uses para el login)
import { RegistroComponent } from './registro/registro';
import { ProductosComponent } from './productos/productos';

export const routes: Routes = [
  { path: 'app', component: App }, // Página principal de bienvenida
  { path: 'inicio-seccion', component: LoginComponent },
  { path: 'registro', component: RegistroComponent }, // Página de registro
  { path: 'productos', component: ProductosComponent }, // Página de productos
 
];
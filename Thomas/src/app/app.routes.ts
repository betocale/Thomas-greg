import { Routes } from '@angular/router';
import { App } from './app';
import { LoginComponent } from './inicio-seccion/inicio-seccion';
import { RegistroComponent } from './registro/registro';
import { ProductosComponent } from './productos/productos';
import { AuditoriaComponent } from './auditoria/auditoria';
import { DetalleProductoComponent } from './detallepro/detallepro';
import { InventarioComponent } from './inventario/inventario';
import { PagarProComponent } from './pagarpro/pagarpro';

export const routes: Routes = [
  { path: 'app', component: App },
  { path: 'inicio-seccion', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'auditoria', component: AuditoriaComponent },
  { path: 'detallepro/:id', component: DetalleProductoComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'pagarpro',component: PagarProComponent},
];
import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  precioFormateado: string;
  imagen: string;
  disponible: boolean;
  especificaciones: string[];
}

@Component({
  selector: 'app-detallepro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detallepro.html',
  styleUrls: ['./detallepro.css']
})
export class DetalleProductoComponent implements OnInit {

  producto!: Producto;

  listaProductos: Producto[] = [
    {
      id: 1,
      nombre: 'Laptop Dell Inspiron 15',
      categoria: 'Computadores',
      descripcion: 'Laptop ideal para trabajo, estudio y entretenimiento con alto rendimiento.',
      precio: 3499900,
      precioFormateado: '$3.499.900',
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Intel Core i7', '16GB RAM', 'SSD 512GB']
    },
    {
      id: 2,
      nombre: 'MacBook Air M4',
      categoria: 'Computadores',
      descripcion: 'Ultraligera y potente gracias al nuevo chip Apple M4.',
      precio: 6299900,
      precioFormateado: '$6.299.900',
      imagen: 'https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Apple M4', '16GB RAM', 'SSD 512GB']
    },
    {
      id: 3,
      nombre: 'Lenovo Legion 7',
      categoria: 'Computadores',
      descripcion: 'Portátil gamer de alto rendimiento.',
      precio: 10499900,
      precioFormateado: '$10.499.900',
      imagen: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Ryzen 9', 'RTX 5080']
    },
    {
      id: 4,
      nombre: 'HP Victus 16',
      categoria: 'Computadores',
      descripcion: 'Portátil para gaming y productividad.',
      precio: 5999900,
      precioFormateado: '$5.999.900',
      imagen: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Intel Core i7', 'RTX 4060']
    },
    {
      id: 5,
      nombre: 'ASUS ROG Strix',
      categoria: 'Computadores',
      descripcion: 'Máxima potencia para juegos competitivos.',
      precio: 8999900,
      precioFormateado: '$8.999.900',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      disponible: false,
      especificaciones: ['Ryzen 7', 'RTX 4070']
    },
    {
      id: 6,
      nombre: 'iPhone 16 Pro Max',
      categoria: 'Celulares',
      descripcion: 'El smartphone más potente de Apple con cámara profesional.',
      precio: 7999900,
      precioFormateado: '$7.999.900',
      imagen: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['512GB', 'Titanio Natural']
    },
    {
      id: 7,
      nombre: 'Samsung Galaxy S25 Ultra',
      categoria: 'Celulares',
      descripcion: 'Smartphone de gama alta con IA integrada.',
      precio: 6899900,
      precioFormateado: '$6.899.900',
      imagen: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['512GB', 'Snapdragon']
    },
    {
      id: 8,
      nombre: 'Google Pixel 9',
      categoria: 'Celulares',
      descripcion: 'Experiencia pura Android con funciones avanzadas de IA.',
      precio: 4999900,
      precioFormateado: '$4.999.900',
      imagen: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Android 15', 'IA']
    },
    {
      id: 9,
      nombre: 'Xiaomi 15 Pro',
      categoria: 'Celulares',
      descripcion: 'Rendimiento excepcional y cámaras con óptica Leica.',
      precio: 4299900,
      precioFormateado: '$4.299.900',
      imagen: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['512GB', 'Leica']
    },
    {
      id: 10,
      nombre: 'Motorola Edge 60',
      categoria: 'Celulares',
      descripcion: 'Diseño elegante con pantalla fluida.',
      precio: 3299900,
      precioFormateado: '$3.299.900',
      imagen: 'https://images.unsplash.com/photo-1510557880182-3f8cbf7b8b9b?auto=format&fit=crop&w=800&q=80',
      disponible: false,
      especificaciones: ['OLED 144Hz']
    },
    {
      id: 11,
      nombre: 'Samsung Galaxy Tab S10',
      categoria: 'Tabletas',
      descripcion: 'Perfecta para productividad y entretenimiento con S Pen.',
      precio: 3299900,
      precioFormateado: '$3.299.900',
      imagen: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['256GB', 'S Pen']
    },
    {
      id: 12,
      nombre: 'iPad Pro M4',
      categoria: 'Tabletas',
      descripcion: 'La tablet más delgada y potente del mercado.',
      precio: 6799900,
      precioFormateado: '$6.799.900',
      imagen: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['13 pulgadas', '512GB']
    },
    {
      id: 13,
      nombre: 'Lenovo Tab P12',
      categoria: 'Tabletas',
      descripcion: 'Excelente pantalla multimedia para el día a día.',
      precio: 1999900,
      precioFormateado: '$1.999.900',
      imagen: 'https://images.unsplash.com/photo-1589739900243-4b52cd9d104d?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['128GB']
    },
    {
      id: 14,
      nombre: 'LG UltraWide 34"',
      categoria: 'Monitores',
      descripcion: 'Monitor UltraWide ideal para productividad y videojuegos.',
      precio: 1899900,
      precioFormateado: '$1.899.900',
      imagen: 'https://images.unsplash.com/photo-1587825140708-1e3f0b5c6f4d?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['IPS', '144Hz']
    },
    {
      id: 15,
      nombre: 'Samsung Odyssey G8',
      categoria: 'Monitores',
      descripcion: 'Monitor gaming con panel OLED de alta tasa de refresco.',
      precio: 5199900,
      precioFormateado: '$5.199.900',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['OLED', '240Hz']
    },
    {
      id: 16,
      nombre: 'ASUS TUF Gaming',
      categoria: 'Monitores',
      descripcion: 'Monitor resistente diseñado para eSports.',
      precio: 1499900,
      precioFormateado: '$1.499.900',
      imagen: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['27"', '165Hz']
    },
    {
      id: 17,
      nombre: 'RTX 5090',
      categoria: 'Componentes',
      descripcion: 'La tarjeta gráfica más potente para gaming y diseño.',
      precio: 12999900,
      precioFormateado: '$12.999.900',
      imagen: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['32GB GDDR7']
    },
    {
      id: 18,
      nombre: 'RTX 5080',
      categoria: 'Componentes',
      descripcion: 'Alto rendimiento gráfico para creadores y gamers.',
      precio: 8999900,
      precioFormateado: '$8.999.900',
      imagen: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['16GB GDDR7']
    },
    {
      id: 19,
      nombre: 'AMD Ryzen 9 9950X',
      categoria: 'Componentes',
      descripcion: 'Procesador de alta gama para estaciones de trabajo.',
      precio: 3999900,
      precioFormateado: '$3.999.900',
      imagen: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['16 Núcleos']
    },
    {
      id: 20,
      nombre: 'Intel Core Ultra 9',
      categoria: 'Componentes',
      descripcion: 'Potencia extrema con arquitectura avanzada.',
      precio: 4299900,
      precioFormateado: '$4.299.900',
      imagen: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80',
      disponible: false,
      especificaciones: ['24 Núcleos']
    },
    {
      id: 21,
      nombre: 'Logitech G Pro X',
      categoria: 'Accesorios',
      descripcion: 'Audífonos gamer profesionales con sonido envolvente.',
      precio: 649900,
      precioFormateado: '$649.900',
      imagen: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Audífonos Gamer RGB']
    },
    {
      id: 22,
      nombre: 'Logitech MX Master 3S',
      categoria: 'Accesorios',
      descripcion: 'Mouse ergonómico de precisión avanzada.',
      precio: 499900,
      precioFormateado: '$499.900',
      imagen: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Mouse inalámbrico']
    },
    {
      id: 23,
      nombre: 'Razer BlackWidow',
      categoria: 'Accesorios',
      descripcion: 'Teclado mecánico con respuesta táctil y RGB.',
      precio: 699900,
      precioFormateado: '$699.900',
      imagen: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Teclado Mecánico RGB']
    },
    {
      id: 24,
      nombre: 'HyperX Cloud III',
      categoria: 'Accesorios',
      descripcion: 'Comodidad legendaria y sonido envolvente.',
      precio: 549900,
      precioFormateado: '$549.900',
      imagen: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Auriculares Gamer']
    },
    {
      id: 25,
      nombre: 'PlayStation 5 Pro',
      categoria: 'Consolas',
      descripcion: 'La experiencia definitiva en consolas de videojuegos.',
      precio: 3999900,
      precioFormateado: '$3.999.900',
      imagen: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['2TB SSD']
    },
    {
      id: 26,
      nombre: 'Xbox Series X',
      categoria: 'Consolas',
      descripcion: 'Potencia y velocidad de nueva generación.',
      precio: 2999900,
      precioFormateado: '$2.999.900',
      imagen: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['1TB SSD']
    },
    {
      id: 27,
      nombre: 'Nintendo Switch OLED',
      categoria: 'Consolas',
      descripcion: 'Juega en casa o en cualquier lugar con pantalla vibrante.',
      precio: 1899900,
      precioFormateado: '$1.899.900',
      imagen: 'https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['Edición OLED']
    },
    {
      id: 28,
      nombre: 'DJI Mini 4 Pro',
      categoria: 'Drones',
      descripcion: 'Captura tomas aéreas con calidad profesional.',
      precio: 4999900,
      precioFormateado: '$4.999.900',
      imagen: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['4K HDR']
    },
    {
      id: 29,
      nombre: 'Apple Watch Ultra 2',
      categoria: 'Wearables',
      descripcion: 'Reloj deportivo resistente para aventuras extremas.',
      precio: 4199900,
      precioFormateado: '$4.199.900',
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['GPS + Cellular']
    },
    {
      id: 30,
      nombre: 'GoPro Hero 13',
      categoria: 'Cámaras',
      descripcion: 'Cámara de acción resistente para grabar cada aventura.',
      precio: 2499900,
      precioFormateado: '$2.499.900',
      imagen: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=800&q=80',
      disponible: true,
      especificaciones: ['5.3K 60FPS']
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const encontrado = this.listaProductos.find(p => p.id === id);

    if (encontrado) {
      this.producto = encontrado;
    } else {
      this.router.navigate(['/productos']);
    }
  }

  agregarCarrito(): void {
    alert(`${this.producto.nombre} agregado al carrito.`);
  }

  volver(): void {
    this.location.back();
  }

  irAProductos(): void {
    this.router.navigate(['/productos']);
  }

}
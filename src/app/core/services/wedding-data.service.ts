import { Injectable, signal } from '@angular/core';
import { WeddingEvent, TransportStop, MadridSection } from '../models/wedding.models';

@Injectable({
  providedIn: 'root'
})
export class WeddingDataService {

  readonly weddingDate = new Date('2026-12-12T13:00:00');

  readonly events = signal<WeddingEvent[]>([
    {
      hora: '13:00',
      titulo: 'Ceremonia',
      descripcion: 'El momento en el que todo empieza. Prometemos que será único, emotivo y muy nuestro.',
      icon: '⛪'
    },
    {
      hora: '14:00',
      titulo: 'Cóctel',
      descripcion: 'Brindemos, riamos y disfrutemos juntos del primer aperitivo de lo que será un gran día.',
      icon: '🥂'
    },
    {
      hora: '15:30',
      titulo: 'Comida',
      descripcion: 'Una mesa, buena compañía y mucho que celebrar.',
      icon: '🍽️'
    },
    {
      hora: '17:30',
      titulo: 'Fiesta',
      descripcion: 'Que empiece la música. No penséis en el mañana, hoy es para disfrutar.',
      icon: '✨'
    },
    {
      hora: '00:00',
      titulo: 'Autobús',
      descripcion: 'Para que solo os ocupéis de pasarlo bien, os llevamos de vuelta.',
      icon: '🚌'
    }
  ]);

  readonly transportStops = signal<TransportStop[]>([
    {
      numero: 1,
      nombre: 'Velilla de San Antonio',
      hora: '11:45',
      descripcion: 'Punto de salida desde el pueblo'
    },
    {
      numero: 2,
      nombre: 'Intercambiador Avenida de América',
      hora: '12:30',
      descripcion: 'Segunda parada en Madrid'
    },
    {
      numero: 3,
      nombre: 'La Casa de Mónico',
      hora: '13:00',
      descripcion: 'Destino — Ceremonia y Celebración'
    }
  ]);

  readonly madridSections = signal<MadridSection[]>([
    {
      titulo: 'De los de siempre',
      icon: '🍷',
      lugares: [
        { nombre: 'Montesa', categoria: 'Bar de tapas', descripcion: 'El clásico de siempre' },
        { nombre: 'Jurucha', categoria: 'Taberna', descripcion: 'Para los de verdad' },
        { nombre: "Avanty's", categoria: 'Cervecería', descripcion: 'Siempre apetece' }
      ]
    },
    {
      titulo: 'Nuestros favoritos',
      icon: '⭐',
      lugares: [
        { nombre: 'Soy Sohho', categoria: 'Coctelería', descripcion: 'Copas con estilo' },
        { nombre: 'Mami Tacos', categoria: 'Mexicano', descripcion: 'Los mejores tacos' },
        { nombre: 'Chuka', categoria: 'Ramen', descripcion: 'Ramen japonés' },
        { nombre: 'Tasca la Farmacia', categoria: 'Taberna moderna', descripcion: 'Cocina de producto' },
        { nombre: 'Ramen Komainu', categoria: 'Japonés', descripcion: 'Otro imprescindible' },
        { nombre: 'Tres por Cuatro', categoria: 'Vinos', descripcion: 'Para los amantes del vino' }
      ]
    },
    {
      titulo: 'Para darse un homenaje',
      icon: '👑',
      lugares: [
        { nombre: 'Kappo', categoria: 'Alta cocina japonesa', descripcion: 'Experiencia única' },
        { nombre: 'Soy Kitchen', categoria: 'Fusión', descripcion: 'Creatividad en el plato' },
        { nombre: 'La Bien Aparecida', categoria: 'Cocina española', descripcion: 'Producto y tradición' }
      ]
    }
  ]);

  readonly madridPlanes = signal([
    {
      titulo: 'Churros con chocolate en Manosanta',
      descripcion: 'El plan perfecto cualquier mañana'
    },
    {
      titulo: 'Pasear por El Retiro',
      descripcion: 'El pulmón verde de Madrid'
    },
    {
      titulo: 'Compras por Goya',
      descripcion: 'La mejor zona de tiendas'
    },
    {
      titulo: 'Correr por el Parque Juan Carlos I',
      descripcion: 'Para los más deportistas'
    }
  ]);
}

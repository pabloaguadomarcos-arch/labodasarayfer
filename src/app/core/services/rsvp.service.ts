import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { RsvpForm, RsvpResponse } from '../models/wedding.models';

@Injectable({
  providedIn: 'root'
})
export class RsvpService {
  private readonly http = inject(HttpClient);

  // TODO: Reemplazar con la URL real de tu API
  private readonly apiUrl = '/api/rsvp';

  /**
   * Envía la confirmación de asistencia.
   * En modo desarrollo, simula la respuesta.
   */
  submitRsvp(form: RsvpForm): Observable<RsvpResponse> {
    // Para usar con una API real, descomentar:
    // return this.http.post<RsvpResponse>(this.apiUrl, form, {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // });

    // Simulación para desarrollo:
    return of({ success: true, message: '¡Confirmación recibida! Nos vemos el 12 de diciembre.' })
      .pipe(delay(1500));
  }

  /**
   * Ejemplo de integración con Netlify Forms
   * Para activar, añadir data-netlify="true" al formulario HTML
   * y usar este método
   */
  submitNetlifyForm(form: RsvpForm): Observable<RsvpResponse> {
    const body = new URLSearchParams();
    body.set('form-name', 'rsvp-boda');
    Object.entries(form).forEach(([key, value]) => {
      body.set(key, String(value));
    });

    return this.http.post('/api/rsvp', body.toString(), {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }),
      responseType: 'text'
    }).pipe(
      map(() => ({ success: true, message: '¡Confirmación recibida!' })),
      catchError(() => of({ success: false, message: 'Ha habido un error. Por favor, inténtalo de nuevo.' }))
    );
  }
}

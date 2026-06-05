// ─── RSVP Model ───────────────────────────────────────────────
export interface RsvpForm {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  asistira: boolean | null;
  acompanantes: number;
  restriccionesAlimentarias: string;
  comentarios: string;
}

export interface RsvpResponse {
  success: boolean;
  message: string;
  id?: string;
}

// ─── Wedding Info ─────────────────────────────────────────────
export interface WeddingEvent {
  hora: string;
  titulo: string;
  descripcion: string;
  icon: string;
}

// ─── Transport Stop ───────────────────────────────────────────
export interface TransportStop {
  numero: number;
  nombre: string;
  hora: string;
  descripcion?: string;
}

// ─── Madrid Place ─────────────────────────────────────────────
export interface MadridPlace {
  nombre: string;
  categoria: string;
  descripcion?: string;
  emoji?: string;
}

export interface MadridSection {
  titulo: string;
  icon: string;
  lugares: MadridPlace[];
}

// ─── Countdown ────────────────────────────────────────────────
export interface CountdownData {
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
}

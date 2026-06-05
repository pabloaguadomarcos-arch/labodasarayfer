import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RsvpService } from '../../core/services/rsvp.service';
import { RsvpForm } from '../../core/models/wedding.models';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-confirmacion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {
  private fb = inject(FormBuilder);
  private rsvpService = inject(RsvpService);
  private meta = inject(Meta);
  private titleService = inject(Title);

  form!: FormGroup;
  status = signal<FormStatus>('idle');
  errorMessage = signal<string>('');

  ngOnInit(): void {
    this.titleService.setTitle('Confirmación · Sara & Fernando · 12.12.2026');
    this.meta.updateTag({ name: 'description', content: 'Confirma tu asistencia a la boda de Sara y Fernando el 12 de diciembre de 2026.' });

    this.form = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      apellidos: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern(/^[+\d\s\-()]{7,20}$/)]],
      asistira: [null, [Validators.required]],
      acompanantes: [0, [Validators.min(0), Validators.max(10)]],
      restricciones: ['', [Validators.maxLength(300)]],
      comentarios: ['', [Validators.maxLength(500)]]
    });

    this.form.get('asistira')?.valueChanges.subscribe(val => {
      if (val === 'false') this.form.get('acompanantes')?.setValue(0);
    });
  }

  get nombre(): AbstractControl { return this.form.get('nombre')!; }
  get apellidos(): AbstractControl { return this.form.get('apellidos')!; }
  get email(): AbstractControl { return this.form.get('email')!; }
  get telefono(): AbstractControl { return this.form.get('telefono')!; }
  get asistira(): AbstractControl { return this.form.get('asistira')!; }
  get acompanantes(): AbstractControl { return this.form.get('acompanantes')!; }
  get restricciones(): AbstractControl { return this.form.get('restricciones')!; }
  get comentarios(): AbstractControl { return this.form.get('comentarios')!; }

  isInvalid(ctrl: AbstractControl): boolean {
    return ctrl.invalid && (ctrl.dirty || ctrl.touched);
  }

  decrementAcompanantes(): void {
    const current = Number(this.acompanantes.value) || 0;
    if (current > 0) this.acompanantes.setValue(current - 1);
  }

  incrementAcompanantes(): void {
    const current = Number(this.acompanantes.value) || 0;
    if (current < 10) this.acompanantes.setValue(current + 1);
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.status.set('sending');
    const payload: RsvpForm = {
      nombre: this.nombre.value.trim(),
      apellidos: this.apellidos.value.trim(),
      email: this.email.value.trim().toLowerCase(),
      telefono: this.telefono.value?.trim() || '',
      asistira: this.asistira.value === 'true',
      acompanantes: Number(this.acompanantes.value) || 0,
      restriccionesAlimentarias: this.restricciones.value?.trim() || '',
      comentarios: this.comentarios.value?.trim() || ''
    };
    this.rsvpService.submitRsvp(payload).subscribe({
      next: () => this.status.set('success'),
      error: (err) => {
        console.error('RSVP error:', err);
        this.errorMessage.set('Ha ocurrido un error. Por favor, inténtalo de nuevo.');
        this.status.set('error');
      }
    });
  }

  resetForm(): void {
    this.form.reset({ acompanantes: 0 });
    this.status.set('idle');
    this.errorMessage.set('');
  }
}

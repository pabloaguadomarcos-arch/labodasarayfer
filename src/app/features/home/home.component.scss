// ─── Home / Portada ───────────────────────────────────────────
.home {
  position: relative;
  min-height: 100vh;
  background-color: var(--cream);
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -10%, var(--cream-dark) 0%, transparent 60%),
    radial-gradient(ellipse 60% 40% at 80% 80%, var(--cream-deeper) 0%, transparent 50%);
  overflow: hidden;
}

// ─── Esquinas decorativas ─────────────────────────────────────
.home__corner {
  position: absolute;
  z-index: 2;
  pointer-events: none;

  &--tl { top: 0; left: 0; width: clamp(100px, 18vw, 180px); }
  &--tr { top: 0; right: 0; width: clamp(100px, 18vw, 180px); }
  &--bl { bottom: 80px; left: 0; width: clamp(80px, 14vw, 140px); }
  &--br { bottom: 80px; right: 0; width: clamp(80px, 14vw, 140px); }

  svg { width: 100%; height: auto; }
}

// ─── Hero ─────────────────────────────────────────────────────
.home__hero {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 5rem var(--space-lg) var(--space-2xl);
  padding-top: max(5rem, 80px);
}

// ─── Estrella central ─────────────────────────────────────────
.home__star {
  width: clamp(48px, 8vw, 72px);
  height: clamp(48px, 8vw, 72px);
  margin-bottom: var(--space-md);
  animation: floatGently 5s ease-in-out infinite;

  svg { width: 100%; height: 100%; }
}

// ─── Estrellas ambiente ───────────────────────────────────────
.home__stars-ambient {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.home__star-dot {
  position: absolute;
  color: var(--gold);
  font-size: 0.65rem;
  animation: shimmer 3s ease infinite;

  &:nth-child(2) { animation-delay: 1s; font-size: 0.5rem; }
  &:nth-child(3) { animation-delay: 2s; }
  &:nth-child(4) { animation-delay: 0.5s; font-size: 0.55rem; }
}

// ─── Nombres ──────────────────────────────────────────────────
.home__names {
  font-family: var(--font-display);
  font-size: clamp(3rem, 10vw, 6rem);
  color: var(--garnet);
  line-height: 1.05;
  letter-spacing: -0.01em;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0 0.3em;
  margin-bottom: var(--space-md);

  // Primera letra grande (mayúscula grande estilo editorial)
  .home__name:first-child::first-letter,
  .home__name:last-child::first-letter {
    font-size: 1.15em;
  }
}

.home__name {
  display: inline;
}

.home__ampersand {
  font-family: var(--font-display);
  font-style: italic;
  color: var(--gold);
  font-size: 0.85em;
}

// ─── Fecha ────────────────────────────────────────────────────
.home__date-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}

.home__date-line {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 200px;
}

.home__date-dash {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

.home__heart {
  color: var(--garnet);
  font-size: 0.6rem;
  animation: shimmer 4s ease infinite;
}

.home__date {
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--sepia);
  margin: 0;
}

// ─── Ilustración escena ───────────────────────────────────────
.home__illustration {
  width: 100%;
  max-width: 560px;
  margin: var(--space-md) 0;
  filter: drop-shadow(0 4px 20px rgba(44, 32, 24, 0.12));
}

.home__scene-svg {
  width: 100%;
  height: auto;
}

// ─── Subtítulo ────────────────────────────────────────────────
.home__subtitle {
  font-family: var(--font-body);
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  font-style: italic;
  color: var(--sepia);
  margin: var(--space-sm) 0 var(--space-md);
  letter-spacing: 0.02em;
}

// ─── Divisor ──────────────────────────────────────────────────
.home__divider {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  width: 200px;
  margin: 0 auto var(--space-lg);

  svg { color: var(--gold); flex-shrink: 0; }
}

.home__divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
}

// ─── Cuenta atrás ─────────────────────────────────────────────
.home__countdown {
  display: flex;
  align-items: center;
  gap: clamp(0.5rem, 3vw, 1.5rem);
  flex-wrap: wrap;
  justify-content: center;
  padding: var(--space-lg) var(--space-xl);
  background: rgba(245, 237, 224, 0.6);
  border: 1px solid rgba(181, 137, 42, 0.25);
  border-radius: var(--radius-sm);
  position: relative;

  // Esquinas decorativas CSS
  &::before, &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border-color: var(--gold);
    border-style: solid;
    opacity: 0.6;
  }

  &::before {
    top: -1px; left: -1px;
    border-width: 2px 0 0 2px;
  }

  &::after {
    bottom: -1px; right: -1px;
    border-width: 0 2px 2px 0;
  }
}

.home__countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 50px;
}

.home__countdown-number {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: var(--garnet);
  line-height: 1;
  letter-spacing: -0.02em;
}

.home__countdown-label {
  font-family: var(--font-body);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--warm-gray);
}

.home__countdown-separator {
  font-size: 1.5rem;
  color: var(--gold);
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 1.2rem;
}

// ─── Grid de secciones ────────────────────────────────────────
.home__nav-section {
  position: relative;
  z-index: 3;
  padding: var(--space-xl) var(--space-lg) var(--space-2xl);
}

.home__nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md);
  max-width: 560px;
  margin: 0 auto;

  @media (min-width: 560px) {
    grid-template-columns: 1fr 1fr;
    max-width: 600px;
  }

  // El último item centrado si es impar
  > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
    max-width: 280px;
    margin: 0 auto;
    width: 100%;
  }
}

// ─── Tarjetas de navegación ───────────────────────────────────
.home__nav-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-lg) var(--space-md);
  background: rgba(255, 252, 245, 0.7);
  border: 1px solid rgba(181, 137, 42, 0.3);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.35s ease;
  aspect-ratio: 1 / 1.05;
  justify-content: center;

  &:hover {
    background: rgba(255, 252, 245, 0.95);
    border-color: var(--gold);
    transform: translateY(-4px);
    box-shadow: var(--shadow-md), var(--shadow-gold);

    .home__nav-card-icon svg {
      transform: scale(1.08);
    }

    .home__nav-card-corner { opacity: 1; }
  }
}

.home__nav-card-icon {
  width: clamp(52px, 12vw, 76px);
  height: clamp(52px, 12vw, 76px);

  svg {
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease;
  }
}

.home__nav-card-label {
  font-family: var(--font-body);
  font-size: clamp(0.75rem, 2.5vw, 0.9rem);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);
  text-align: center;
  line-height: 1.3;
}

.home__nav-card-sub {
  font-family: var(--font-body);
  font-size: 0.7rem;
  color: var(--warm-gray);
  letter-spacing: 0.06em;

  // Línea decorativa bajo
  &::before {
    content: '— ';
    color: var(--gold);
    opacity: 0.6;
  }

  &::after {
    content: ' —';
    color: var(--gold);
    opacity: 0.6;
  }
}

// Esquinas de tarjeta
.home__nav-card-corner {
  position: absolute;
  width: 10px;
  height: 10px;
  border-color: var(--gold);
  border-style: solid;
  opacity: 0.4;
  transition: opacity 0.3s;

  &--tl { top: 4px; left: 4px; border-width: 1px 0 0 1px; }
  &--tr { top: 4px; right: 4px; border-width: 1px 1px 0 0; }
  &--bl { bottom: 4px; left: 4px; border-width: 0 0 1px 1px; }
  &--br { bottom: 4px; right: 4px; border-width: 0 1px 1px 0; }
}

// ─── Footer ───────────────────────────────────────────────────
.home__footer {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: var(--space-md) var(--space-lg) var(--space-xl);
}

.home__skyline {
  width: 100%;
  margin-bottom: var(--space-md);
  opacity: 0.6;

  svg { width: 100%; height: auto; }
}

.home__footer-text {
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--warm-gray);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
}

.home__footer-star {
  color: var(--gold);
  font-size: 0.6rem;
  animation: shimmer 3s ease infinite;

  &:last-child { animation-delay: 1.5s; }
}

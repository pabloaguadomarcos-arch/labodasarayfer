@use 'sass:color';

.regalo-page {
  min-height: 100vh;
  background-color: var(--color-cream);
  position: relative;
  overflow-x: hidden;
  padding-bottom: 4rem;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
  }
}

// ── Corner decorations ──────────────────────────────────────────────────────
.corner-decor {
  position: absolute;
  width: 130px;
  height: 130px;
  z-index: 2;
  pointer-events: none;

  &.corner-tl { top: 0; left: 0; }
  &.corner-tr { top: 0; right: 0; }
}

// ── Stars scatter ────────────────────────────────────────────────────────────
.stars-scatter {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  z-index: 1;
  pointer-events: none;
  opacity: 0.7;
}

// ── Page Header ──────────────────────────────────────────────────────────────
.regalo-header {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 5rem 2rem 2rem;

  @media (max-width: 600px) {
    padding: 4rem 1.5rem 1.5rem;
  }
}

.gold-star-large {
  display: flex;
  justify-content: center;
  margin-bottom: 0.75rem;
  animation: floatGently 4s ease-in-out infinite;
}

.regalo-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 10vw, 5.5rem);
  color: var(--color-garnet);
  letter-spacing: 0.04em;
  margin: 0 0 0.5rem;
  line-height: 1;
  animation: fadeInUp 0.9s ease both;
}

.header-divider {
  display: flex;
  justify-content: center;
  margin: 0.5rem auto 1.5rem;
}

.regalo-intro {
  font-family: var(--font-serif);
  font-size: clamp(0.95rem, 2.5vw, 1.1rem);
  color: var(--color-sepia);
  line-height: 1.85;
  font-style: italic;
  max-width: 480px;
  margin: 0 auto 1rem;
  animation: fadeInUp 1.1s ease 0.2s both;
}

.heart-divider {
  color: var(--color-garnet);
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.5rem;
}

// ── Main illustrated scene ───────────────────────────────────────────────────
.regalo-scene {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 360px;
  padding: 0 1rem;
  z-index: 3;
  animation: fadeInUp 1.2s ease 0.3s both;

  @media (max-width: 600px) {
    min-height: 300px;
  }
}

.globe-bg {
  position: absolute;
  top: 0;
  right: 5%;
  width: 300px;
  height: 260px;
  pointer-events: none;
  opacity: 0.6;

  @media (max-width: 600px) {
    display: none;
  }
}

.building-left {
  position: absolute;
  left: 2%;
  bottom: 0;
  opacity: 0.55;
  pointer-events: none;

  @media (max-width: 768px) {
    left: -5%;
    opacity: 0.35;
    transform: scale(0.75);
    transform-origin: bottom left;
  }

  @media (max-width: 450px) {
    display: none;
  }
}

.envelope-illustration {
  position: relative;
  z-index: 4;
  flex-shrink: 0;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.12));

  @media (max-width: 600px) {
    width: 220px;

    svg {
      width: 220px;
    }
  }
}

.luggage-illustration {
  position: absolute;
  bottom: 0;
  left: 5%;
  opacity: 0.8;
  pointer-events: none;
  animation: floatGently 5s ease-in-out 1s infinite;

  @media (max-width: 768px) {
    left: 0;
    transform: scale(0.75);
    transform-origin: bottom left;
  }

  @media (max-width: 450px) {
    transform: scale(0.6);
  }
}

.compass-illustration {
  position: absolute;
  bottom: 10px;
  right: 6%;
  opacity: 0.75;
  pointer-events: none;
  animation: floatGently 6s ease-in-out 2s infinite;

  @media (max-width: 768px) {
    right: 2%;
    transform: scale(0.75);
    transform-origin: bottom right;
  }

  @media (max-width: 450px) {
    display: none;
  }
}

.holly-bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0.75;
  pointer-events: none;

  @media (max-width: 600px) {
    opacity: 0.45;
    transform: scale(0.7);
    transform-origin: bottom right;
  }
}

// ── IBAN Section ──────────────────────────────────────────────────────────────
.iban-section {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.5rem 1rem;
  animation: fadeInUp 1.3s ease 0.5s both;
}

.iban-card {
  background-color: rgba(250, 246, 239, 0.92);
  border: 1px solid var(--color-bronze);
  border-radius: 8px;
  padding: 2rem 2.5rem;
  text-align: center;
  max-width: 440px;
  width: 100%;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.6);
  position: relative;

  // Double border effect
  &::before {
    content: '';
    position: absolute;
    inset: 5px;
    border: 1px solid rgba(181, 137, 42, 0.25);
    border-radius: 4px;
    pointer-events: none;
  }

  @media (max-width: 500px) {
    padding: 1.5rem 1.25rem;
  }
}

.iban-card-top {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.iban-label {
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  color: var(--color-gold);
  font-style: italic;
  margin: 0 0 0.6rem;
  text-transform: uppercase;
}

.iban-number {
  font-family: var(--font-serif);
  font-size: clamp(1.1rem, 3.5vw, 1.35rem);
  color: var(--color-sepia);
  letter-spacing: 0.12em;
  margin: 0 0 0.8rem;
  font-weight: 600;
  word-spacing: 0.3em;
}

.titular-line {
  display: flex;
  justify-content: center;
  margin-bottom: 0.6rem;
}

.titular-text {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-style: italic;
  color: var(--color-bronze);
  margin: 0 0 1.5rem;
}

// ── Copy Button ───────────────────────────────────────────────────────────────
.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1.5px solid var(--color-gold);
  color: var(--color-bronze);
  font-family: var(--font-serif);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  padding: 0.6rem 1.4rem;
  border-radius: 4px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease,
    transform 0.15s ease;

  &:hover {
    background-color: var(--color-gold);
    color: var(--color-cream);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 2px solid var(--color-gold);
    outline-offset: 3px;
  }

  // Copied state
  &.copied {
    border-color: var(--color-fir);
    background-color: var(--color-fir);
    color: var(--color-cream);
    animation: copiedPulse 0.4s ease;
  }
}

.copy-icon {
  display: flex;
  align-items: center;
  flex-shrink: 0;

  svg {
    transition: transform 0.2s ease;
  }
}

.copy-text {
  transition: opacity 0.2s ease;
}

@keyframes copiedPulse {
  0% { transform: scale(1); }
  40% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

// ── Footer ────────────────────────────────────────────────────────────────────
.regalo-footer {
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-top: 2rem;
  opacity: 0.7;
}

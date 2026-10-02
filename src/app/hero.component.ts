import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero" id="top" role="region" aria-roledescription="carousel"
             (mouseenter)="paused.set(true)" (mouseleave)="paused.set(false)">
      @for (slide of slides; track slide.image; let i = $index) {
        <img class="bg" [class.active]="activeIndex() === i" [src]="slide.image" width="1920" height="700" alt="" [attr.fetchpriority]="i === 0 ? 'high' : 'auto'">
      }
      <div class="container content">
        <h1>{{ i18n.t(currentSlide().titleA) }} <span class="hl">{{ i18n.t(currentSlide().titleB) }}</span></h1>
        <p>{{ i18n.t(currentSlide().description) }}</p>
        <div class="actions">
          <a class="btn" href="#solutions">{{ i18n.t('hero.products') }} <app-icon name="chevron-right" [size]="14" /></a>
          <a class="sales" href="tel:+08505447514"><app-icon name="phone" [size]="30" /><span><small>{{ i18n.t('sales.department') }}</small>+0(850) 544 7514</span></a>
        </div>
      </div>
      <div class="dots" role="group" [attr.aria-label]="i18n.t('hero.slideLabel')">
        @for (slide of slides; track slide.image; let i = $index) {
          <button type="button" [class.on]="activeIndex() === i" [attr.aria-label]="i18n.t('hero.slideLabel') + ' ' + (i + 1)"
                  [attr.aria-pressed]="activeIndex() === i" (click)="setSlide(i)" (focus)="paused.set(true)" (blur)="paused.set(false)"></button>
        }
      </div>
    </section>`,
  styles: [`
    .hero { position: relative; min-height: 680px; display: flex; align-items: center; overflow: hidden; background: #eee; }
    .bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 70% center; opacity: 0; transition: opacity .55s ease; }
    .bg.active { opacity: 1; }
    .content { position: relative; padding-top: 60px; }
    h1 { max-width: 700px; font-size: 40px; font-weight: 400; line-height: 1.2; }
    p { max-width: 560px; margin-top: 14px; font-size: 13px; line-height: 1.5; }
    .actions { display: flex; align-items: center; gap: 16px; margin-top: 24px; }
    .sales { display: flex; align-items: center; gap: 8px; text-decoration: none; font-size: 14px; }
    small { display: block; font-size: 11px; color: #555; }
    .dots { position: absolute; bottom: 20px; left: 50%; display: flex; gap: 8px; transform: translateX(-50%); }
    .dots button { width: 10px; height: 10px; padding: 0; border: 1px solid rgba(255,255,255,.9); border-radius: 50%; background: rgba(255,255,255,.55); }
    .dots button.on { background: #fff; }
    .dots button:focus-visible { outline-color: #fff; }
    @media (max-width: 1023px) { .hero { min-height: 640px; } h1 { font-size: 36px; } }
    @media (max-width: 767px) { .hero { min-height: 560px; align-items: flex-end; padding-bottom: 48px; } .bg { object-position: 78% top; } h1 { font-size: 28px; } .actions { flex-direction: column; align-items: stretch; } }
    @media (prefers-reduced-motion: reduce) { .bg { transition: none; } }`],
})
export class HeroComponent implements OnDestroy {
  readonly i18n = inject(I18nService);
  readonly activeIndex = signal(0);
  readonly paused = signal(false);
  readonly currentSlide = computed(() => this.slides[this.activeIndex()]);
  readonly slides = [
    { image: 'images/hero-bg.webp', titleA: 'hero.titleA', titleB: 'hero.titleB', description: 'hero.description' },
    { image: 'images/process-planning-production.webp', titleA: 'hero.slide2.titleA', titleB: 'hero.slide2.titleB', description: 'hero.slide2.description' },
    { image: 'images/hero-robotics.webp', titleA: 'hero.slide3.titleA', titleB: 'hero.slide3.titleB', description: 'hero.slide3.description' },
  ];
  private readonly rotation = setInterval(() => {
    if (!this.paused()) this.activeIndex.update((index) => (index + 1) % this.slides.length);
  }, 6000);

  setSlide(index: number): void { this.activeIndex.set(index); }
  ngOnDestroy(): void { clearInterval(this.rotation); }
}

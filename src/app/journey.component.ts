import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="journey container" id="journey">
      <p class="eyebrow">{{ i18n.t('journey.eyebrow') }}</p>
      <h2 class="title">{{ i18n.t('journey.titleA') }} <span class="hl">{{ i18n.t('journey.titleB') }}</span></h2>
      <p class="lead">{{ i18n.t('journey.lead') }}</p>
      <ul class="cards">
        @for (c of cards; track c.title) {
          <li>
            <img [src]="c.image" [alt]="i18n.t(c.title)" width="450" height="300" loading="lazy">
            <h3>{{ i18n.t(c.title) }}</h3>
            <p>{{ i18n.t(c.text) }}</p>
            <a href="#">{{ i18n.t('readMoreTitle') }} <app-icon name="chevron-right" [size]="12" /></a>
          </li>
        }
      </ul>
    </section>`,
  styles: [`
    .journey { padding-block: 100px var(--section-space); }
    .lead { max-width: 900px; margin-top: 12px; font-size: 18px; line-height: 1.5; }
    .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 64px 0 0; padding: 0; list-style: none; }
    img { width: 100%; height: auto; aspect-ratio: 3 / 2; object-fit: cover; }
    h3 { margin-top: 22px; font-size: 20px; font-weight: 400; }
    li p { margin-top: 8px; max-width: 280px; font-size: 14px; line-height: 1.5; color: var(--color-text-muted); }
    li a { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; font-size: 14px; text-decoration: none; }
    @media (max-width: 1023px) { .cards { grid-template-columns: 1fr 1fr; } .lead { font-size: 16px; } }
    @media (max-width: 767px) { .cards { grid-template-columns: 1fr; margin-top: 36px; } }`],
})
export class JourneyComponent {
  readonly i18n = inject(I18nService);
  readonly cards = [
    { title: 'journey.design', image: 'images/process-product-design.webp', text: 'journey.designText' },
    { title: 'journey.planning', image: 'images/process-planning-production.webp', text: 'journey.planningText' },
    { title: 'journey.installation', image: 'images/process-installation.webp', text: 'journey.installationText' },
  ];
}

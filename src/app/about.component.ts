import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

interface Stat { icon: string; title: string; text: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="about container" id="about">
      <div class="text">
        <p class="eyebrow">{{ i18n.t('about.eyebrow') }}</p>
        <h2 class="title">{{ i18n.t('about.titleA') }} <span class="hl">{{ i18n.t('about.titleB') }}</span></h2>
        <p class="body">{{ i18n.t('about.description1') }}</p>
        <p class="body">{{ i18n.t('about.description2') }}</p>
        <div class="actions">
          <a class="btn" href="/about">{{ i18n.t('about.button') }} <app-icon name="chevron-right" [size]="14" /></a>
          <a class="link" href="#">{{ i18n.t('about.certificates') }}</a>
        </div>
      </div>
      <ul class="stats">
        @for (s of stats; track s.title) {
          <li><span class="ico"><img [src]="s.icon" alt="" width="54" height="54"></span>
            <div><h3>{{ i18n.t(s.title) }}</h3><p>{{ i18n.t(s.text) }}</p></div></li>
        }
      </ul>
    </section>`,
  styles: [`
    .about { display: grid; grid-template-columns: 1.2fr 1fr; gap: 72px; padding-block: var(--section-space); }
    .title { max-width: 620px; }
    .body { max-width: 560px; margin-top: 20px; font-size: 12px; line-height: 1.5; color: var(--color-text-muted); }
    .body + .body { margin-top: 12px; }
    .actions { display: flex; align-items: center; gap: 18px; margin-top: 30px; }
    .link { font-size: 12px; color: #444; }
    .stats { list-style: none; margin: 32px 0 0; padding: 0; display: grid; gap: 24px; }
    .stats li { display: flex; gap: 18px; align-items: flex-start; }
    .ico { display: grid; place-items: center; flex: none; width: 54px; height: 54px; }
    .ico img { width: 54px; height: 54px; object-fit: contain; }
    h3 { font-size: 16px; font-weight: 400; }
    .stats p { margin-top: 4px; max-width: 280px; font-size: 12px; line-height: 1.4; color: var(--color-text-muted); }
    @media (max-width: 1023px) { .about { grid-template-columns: 1fr; gap: 24px; } }
    @media (max-width: 767px) { .actions { flex-direction: column; align-items: stretch; } .link { text-align: center; } }`],
})
export class AboutComponent {
  readonly i18n = inject(I18nService);
  readonly stats: Stat[] = [
    { icon: 'icons/icons/Icon.svg', title: 'stat.export', text: 'stat.exportText' },
    { icon: 'icons/icons/Icon (1).svg', title: 'stat.products', text: 'stat.productsText' },
    { icon: 'icons/icons/Icon (2).svg', title: 'stat.people', text: 'stat.peopleText' },
  ];
}

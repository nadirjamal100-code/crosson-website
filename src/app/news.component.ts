import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';
import { NEWS_DETAIL_URL } from './news-articles';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="news" id="news">
      <img class="bg" src="images/bg-mist-building.webp" alt="" loading="lazy" width="1830" height="1220">
      <div class="container">
        <p class="eyebrow">{{ i18n.t('news.eyebrow') }}</p>
        <h2 class="title">{{ i18n.t('news.title') }}</h2>
        <p class="lead">{{ i18n.t('news.lead') }}</p>
        <ul>
          @for (n of items; track n.title) {
            <li>
              <img [src]="n.image" [alt]="n.title" width="308" height="440" loading="lazy">
              <div>
                <h3>{{ i18n.t(n.title) }}</h3>
                <p>{{ i18n.t('news.summary') }}</p>
                <a class="btn" [href]="storyUrl($index)" (click)="openArticle($event)">{{ i18n.t('readMoreTitle') }} <app-icon name="chevron-right" [size]="14" /></a>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>`,
  styles: [`
    .news { position: relative; padding-block: 100px var(--section-space); border-top: 1px solid var(--color-border); overflow: hidden; }
    .bg { position: absolute; top: 0; right: 0; width: 65%; transform: translateY(-30%); opacity: .13; pointer-events: none; }
    .container { position: relative; }
    .lead { max-width: 900px; margin-top: 12px; font-size: 18px; line-height: 1.5; }
    ul { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 64px 0 0; padding: 0; list-style: none; }
    li { display: flex; align-items: center; gap: 28px; }
    li img { flex: none; width: 230px; height: 310px; object-fit: cover; }
    h3 { font-size: 17px; font-weight: 400; line-height: 1.4; }
    li p { margin: 12px 0 20px; font-size: 12px; line-height: 1.5; color: var(--color-text-muted); }
    .btn { min-width: 0; width: 164px; }
    @media (max-width: 1279px) { li { flex-direction: column; align-items: flex-start; gap: 24px; } li img { width: 100%; height: auto; aspect-ratio: 308 / 440; max-height: 420px; } }
    @media (max-width: 767px) {
      .news { padding-block: 44px 8px; }
      .container { width: min(calc(100% - 48px), 480px); }
      .eyebrow { font-size: 7px; margin-bottom: 3px; }
      .title { font-size: 18px; line-height: 1.15; }
      .lead { max-width: 100%; margin-top: 6px; font-size: 8px; line-height: 1.45; }
      ul { grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 18px; }
      li { flex-direction: row; align-items: center; gap: 14px; min-width: 0; }
      li img { width: 107px; height: 132px; max-height: none; aspect-ratio: auto; object-fit: cover; }
      li > div { min-width: 0; }
      h3 { font-size: 8px; line-height: 1.35; }
      li p { margin: 7px 0 10px; font-size: 6.5px; line-height: 1.4; }
      .btn { width: 76px; height: 17px; padding-inline: 8px; font-size: 6px; gap: 6px; }
    }
    @media (max-width: 520px) {
      .container { width: calc(100% - 40px); }
      ul { grid-template-columns: 1fr; gap: 18px; }
      li img { width: 112px; height: 138px; }
    }`],
})
export class NewsComponent {
  readonly i18n = inject(I18nService);
  storyUrl(index: number): string { return NEWS_DETAIL_URL(index === 0 ? 'assembly-58th' : 'board-of-directors'); }
  openArticle(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    window.history.pushState({}, '', link.href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  readonly items = [
    { title: 'news.assembly', image: 'images/news-board-assembly.webp' },
    { title: 'news.directors', image: 'images/news-new-directors.webp' },
  ];
}

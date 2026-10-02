import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';
import { NEWS_ARTICLES, NEWS_DETAIL_URL } from './news-articles';

@Component({
  selector: 'app-news-list-page',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="news-page">
      <div class="intro-art">
        <div class="container page-heading">
          <h1>{{ i18n.t('news.pageTitle') }}</h1>
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">{{ i18n.t('services.home') }}</a><span>›</span><span aria-current="page">{{ i18n.t('news.pageTitle') }}</span></nav>
        </div>
        <section class="container stories" aria-label="{{ i18n.t('news.eyebrow') }}">
          @for (story of stories; track story.slug) {
            <article class="story">
              <img [src]="story.image" alt="" width="620" height="770" [attr.loading]="$index < 2 ? 'eager' : 'lazy'">
              <div class="copy">
                <h2>{{ i18n.t(story.title) }}</h2>
                <p>{{ i18n.t('news.listSummary') }}</p>
                <a class="btn" [href]="storyUrl(story.slug)" (click)="openArticle($event)">{{ i18n.t('readMoreTitle') }} <app-icon name="chevron-right" [size]="14" /></a>
              </div>
            </article>
          }
        </section>
      </div>
    </main>`,
  styles: [`
    .news-page { overflow:hidden; background:#f2f2f2; }
    .intro-art { position:relative; isolation:isolate; padding-bottom:86px; }
    .intro-art::before { position:absolute; z-index:-1; inset:0; content:''; background:url('/images/bg-perspective-lines.webp') center 28% / cover no-repeat; opacity:.11; pointer-events:none; }
    .container { width:min(100% - 48px,980px); }
    .page-heading { padding-top:61px; }
    .page-heading h1 { font-size:34px; line-height:1.2; font-weight:400; }
    .breadcrumb { display:flex; align-items:center; gap:15px; margin-top:4px; font-size:11px; }
    .breadcrumb a { text-decoration:none; }.breadcrumb > span:not([aria-current]) { color:#555; font-size:17px; }
    .stories { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:14px; row-gap:44px; margin-top:31px; }
    .story { display:grid; grid-template-columns:218px minmax(0,200px); align-items:center; gap:30px; min-width:0; }
    .story > img { width:218px; height:270px; object-fit:cover; }
    .copy { min-width:0; }.copy h2 { font-size:16px; line-height:1.4; font-weight:400; }
    .copy p { margin:12px 0 28px; color:#666; font-size:12px; line-height:1.45; }
    .btn { display:inline-flex; align-items:center; justify-content:space-between; gap:25px; width:154px; height:34px; padding:0 13px 0 18px; background:#ffd800; color:#111; font-size:12px; text-decoration:none; }
    .btn:hover { filter:brightness(.95); }
    @media(max-width:1023px) {
      .container { width:min(100% - 48px,980px); }.page-heading { padding-top:42px; }
      .stories { column-gap:32px; row-gap:32px; margin-top:30px; }
      .story { grid-template-columns:minmax(0,.95fr) minmax(0,1.05fr); gap:16px; }.story > img { width:100%; height:auto; aspect-ratio:218 / 270; }.copy h2 { font-size:14px; }.copy p { margin:9px 0 18px; font-size:11px; }
      .btn { width:132px; height:32px; padding-inline:12px; }
    }
    @media(max-width:767px) {
      .container { width:min(100% - 40px,520px); }.page-heading { padding-top:34px; }.page-heading h1 { font-size:30px; }
      .breadcrumb { gap:10px; font-size:11px; }.stories { grid-template-columns:1fr; row-gap:22px; margin-top:25px; }
      .story { grid-template-columns:minmax(120px, .9fr) 1.1fr; gap:18px; }
      .story > img { width:100%; height:auto; aspect-ratio:218 / 270; }.copy h2 { font-size:15px; }.copy p { margin:8px 0 15px; font-size:11px; }
      .btn { width:132px; height:32px; font-size:11px; }.intro-art { padding-bottom:48px; }
    }
    @media(max-width:380px) {
      .story { grid-template-columns:minmax(105px,.85fr) 1.15fr; gap:13px; }
      .copy h2 { font-size:13px; }.copy p { font-size:10px; }.btn { width:118px; }
    }
  `],
})
export class NewsListPageComponent {
  readonly i18n = inject(I18nService);
  openArticle(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    window.history.pushState({}, '', link.href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  readonly stories = NEWS_ARTICLES;
  storyUrl(slug: string): string { return NEWS_DETAIL_URL(slug); }
}

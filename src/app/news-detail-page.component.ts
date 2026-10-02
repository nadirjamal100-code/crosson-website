import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';
import { NEWS_ARTICLES, NEWS_DETAIL_URL, NewsArticle } from './news-articles';

@Component({
  selector: 'app-news-detail-page',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="news-detail">
      <div class="article-art">
        <article class="container article">
          <header class="article-heading">
            <h1>{{ i18n.t(story().title) }}</h1>
            <nav class="breadcrumb" aria-label="Breadcrumb">
              <a href="/">{{ i18n.t('services.home') }}</a><span aria-hidden="true">›</span>
              <a href="/news">{{ i18n.t('news.pageTitle') }}</a><span aria-hidden="true">›</span>
              <span aria-current="page">{{ i18n.t(story().title) }}</span>
            </nav>
          </header>

          <img class="cover" [src]="story().cover" [alt]="i18n.t(story().title)" width="1830" height="795">

          <div class="article-copy">
            <p class="standfirst">At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, increasing efficiency and producing solution for <span class="hl">food, quality, automation and software.</span></p>
            <p>Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.</p>
            <p>Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.</p>
            <p>Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.</p>
            <p>Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.</p>
          </div>

          <section class="related" aria-labelledby="related-heading">
            <h2 id="related-heading"><span class="hl">Related</span> News</h2>
            <p class="related-lead">Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah sesame snaps chocolate cake gummies sugar plum cotton candy cupcake sweet</p>
            <div class="related-grid">
              <article class="related-card">
                <img src="/images/news-list/story-1.jpg" alt="A city street beside a modern office building" width="620" height="770" loading="lazy">
                <div class="related-copy"><h3>{{ i18n.t(articles[0].title) }}</h3><p>Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</p><a class="read-more" [href]="storyUrl(articles[0].slug)" (click)="openArticle($event)">Read More <app-icon name="chevron-right" [size]="14" /></a></div>
              </article>
              <article class="related-card">
                <img src="/images/news-list/story-2.jpg" alt="A business executive walking through an office" width="620" height="770" loading="lazy">
                <div class="related-copy"><h3>{{ i18n.t(articles[1].title) }}</h3><p>Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.</p><a class="read-more" [href]="storyUrl(articles[1].slug)" (click)="openArticle($event)">Read More <app-icon name="chevron-right" [size]="14" /></a></div>
              </article>
            </div>
          </section>
        </article>
      </div>
    </main>`,
  styles: [`
    .news-detail { overflow: hidden; background: #f2f2f2; }
    .article-art { position: relative; isolation: isolate; padding-bottom: 82px; }
    .article-art::before { position: absolute; z-index: -1; inset: 0; content: ''; background: url('/images/bg-perspective-lines.webp') center 17% / 100% auto no-repeat; opacity: .12; pointer-events: none; }
    .article { width: min(100% - 48px, 980px); padding-top: 56px; }
    .article-heading h1 { max-width: 720px; font-size: 32px; line-height: 1.2; font-weight: 400; letter-spacing: -.025em; }
    .breadcrumb { display: flex; align-items: center; gap: 13px; margin-top: 10px; font-size: 10px; line-height: 1.5; }
    .breadcrumb a { text-decoration: none; }.breadcrumb a:hover { text-decoration: underline; }
    .breadcrumb > span:not([aria-current]) { font-size: 16px; color: #555; }
    .cover { display: block; width: min(100%, 400px); height: 350px; margin: 31px auto 0; object-fit: cover; }
    .article-copy { margin-top: 25px; color: #666; font-size: 12px; line-height: 1.62; }
    .article-copy p { margin: 0 0 20px; }
    .article-copy .standfirst { margin-bottom: 12px; color: #111; font-size: 19px; line-height: 1.3; }
    .hl { background: linear-gradient(transparent 72%, #ffd800 72%, #ffd800 92%, transparent 92%); }
    .related { margin-top: 74px; }
    .related h2 { font-size: 30px; line-height: 1.2; font-weight: 400; }
    .related-lead { max-width: 640px; margin-top: 9px; font-size: 15px; line-height: 1.45; }
    .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 34px; }
    .related-card { display: grid; grid-template-columns: minmax(130px, 1fr) minmax(0, 1.16fr); gap: 28px; align-items: center; min-width: 0; }
    .related-card > img { width: 100%; height: 250px; object-fit: cover; }
    .related-copy h3 { font-size: 15px; line-height: 1.4; font-weight: 400; }
    .related-copy p { margin: 10px 0 25px; color: #666; font-size: 11px; line-height: 1.45; }
    .read-more { display: inline-flex; align-items: center; justify-content: space-between; width: 145px; height: 32px; padding: 0 12px 0 17px; background: #ffd800; font-size: 11px; text-decoration: none; }
    .read-more:hover { filter: brightness(.95); }
    @media (min-width: 1500px) { .article { width: min(100% - 48px, 1402px); padding-top: 68px; }.article-heading h1 { max-width: 820px; font-size: 40px; }.cover { margin-top: 38px; }.article-copy { font-size: 15px; }.article-copy .standfirst { font-size: 24px; }.related h2 { font-size: 38px; }.related-lead { font-size: 19px; }.related-card > img { height: 300px; }.related-copy h3 { font-size: 18px; }.related-copy p { font-size: 14px; } }
    @media (max-width: 1023px) {
      .article { width: min(100% - 48px, 980px); padding-top: 42px; }.article-heading h1 { font-size: 29px; }
      .article-copy .standfirst { font-size: 17px; }.related { margin-top: 58px; }.related-grid { gap: 22px; }
      .related-card { grid-template-columns: minmax(105px, .85fr) minmax(0, 1.15fr); gap: 16px; }.related-card > img { height: 210px; }
    }
    @media (max-width: 767px) {
      .article-art { padding-bottom: 48px; }.article { width: min(100% - 40px, 560px); padding-top: 34px; }
      .article-heading h1 { font-size: clamp(25px, 7vw, 32px); }.breadcrumb { flex-wrap: wrap; column-gap: 9px; row-gap: 2px; margin-top: 9px; font-size: 10px; }
      .cover { margin-top: 22px; }.article-copy { margin-top: 19px; font-size: 13px; line-height: 1.65; }
      .article-copy .standfirst { font-size: 17px; line-height: 1.4; }.article-copy p { margin-bottom: 16px; }
      .related { margin-top: 45px; }.related h2 { font-size: 27px; }.related-lead { margin-top: 8px; font-size: 14px; }
      .related-grid { grid-template-columns: 1fr; gap: 22px; margin-top: 24px; }
      .related-card { grid-template-columns: minmax(115px, .82fr) minmax(0, 1.18fr); gap: 18px; }.related-card > img { height: auto; aspect-ratio: .8; }
      .related-copy h3 { font-size: 15px; }.related-copy p { margin: 8px 0 14px; font-size: 11px; }.read-more { width: 132px; height: 32px; }
    }
    @media (max-width: 380px) { .breadcrumb { font-size: 9px; }.related-card { grid-template-columns: minmax(105px, .8fr) minmax(0, 1.2fr); gap: 13px; }.related-copy h3 { font-size: 14px; }.read-more { width: 120px; } }
  `],
})
export class NewsDetailPageComponent {
  readonly i18n = inject(I18nService);
  readonly articles = NEWS_ARTICLES;
  readonly story = signal(this.findArticle());

  @HostListener('window:popstate')
  syncArticle(): void { this.story.set(this.findArticle()); }

  storyUrl(slug: string): string { return NEWS_DETAIL_URL(slug); }

  openArticle(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const link = event.currentTarget as HTMLAnchorElement;
    window.history.pushState({}, '', link.href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  private findArticle(): NewsArticle {
    const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).at(-1) : '';
    return NEWS_ARTICLES.find((article) => article.slug === slug) ?? NEWS_ARTICLES[0];
  }
}

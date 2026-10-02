import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="about-page">
      <div class="intro-art">
        <div class="container page-heading">
          <h1>{{ i18n.t('aboutPage.title') }}</h1>
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <a href="/">{{ i18n.t('aboutPage.home') }}</a><span>›</span>
            <a href="/about">{{ i18n.t('aboutPage.corporate') }}</a><span>›</span>
            <span aria-current="page">{{ i18n.t('aboutPage.breadcrumb') }}</span>
          </nav>
        </div>
        <section class="container overview" aria-labelledby="about-overview-title">
          <h2 id="about-overview-title">{{ i18n.t('aboutPage.introTitleA') }} <span class="hl">{{ i18n.t('aboutPage.introTitleB') }}</span></h2>
          <p>{{ i18n.t('aboutPage.paragraph1') }}</p>
          <p>{{ i18n.t('aboutPage.paragraph2') }}</p>
        </section>
      </div>

      <section class="container values" aria-labelledby="values-title">
        <div class="values-copy">
          <p class="eyebrow">{{ i18n.t('aboutPage.values') }}</p>
          <h2 id="values-title">{{ i18n.t('aboutPage.valuesTitleA') }} <span class="hl">{{ i18n.t('aboutPage.valuesTitleB') }}</span></h2>
          <p class="body">{{ i18n.t('aboutPage.valuesText') }}</p>
          <a class="certificate" href="#">{{ i18n.t('aboutPage.certificates') }}</a>
        </div>
        <div class="value-cards">
          <article class="value-card">
            <img src="images/process-planning-production.webp" [alt]="i18n.t('aboutPage.mission')" width="450" height="300" loading="lazy">
            <h3>{{ i18n.t('aboutPage.mission') }}</h3>
            <p>{{ i18n.t('aboutPage.missionText') }}</p>
            <a href="#">{{ i18n.t('readMoreTitle') }} <app-icon name="chevron-right" [size]="12" /></a>
          </article>
          <article class="value-card">
            <img src="images/process-installation.webp" [alt]="i18n.t('aboutPage.vision')" width="450" height="300" loading="lazy">
            <h3>{{ i18n.t('aboutPage.vision') }}</h3>
            <p>{{ i18n.t('aboutPage.visionText') }}</p>
            <a href="#">{{ i18n.t('readMoreTitle') }} <app-icon name="chevron-right" [size]="12" /></a>
          </article>
        </div>
      </section>

      <section class="container partners" aria-labelledby="partners-title">
        <div class="partners-intro">
          <div>
            <p class="eyebrow">{{ i18n.t('aboutPage.partners') }}</p>
            <h2 id="partners-title">{{ i18n.t('aboutPage.partnersTitleA') }} <span class="hl">{{ i18n.t('aboutPage.partnersTitleB') }}</span> {{ i18n.t('aboutPage.partnersTitleC') }}</h2>
          </div>
          <blockquote>
            <p>{{ i18n.t('aboutPage.quote') }}</p>
            <cite>{{ i18n.t('aboutPage.quoteBy') }}</cite>
          </blockquote>
        </div>
        <div class="partner-grid" [attr.aria-label]="i18n.t('aboutPage.partners')">
          @for (partner of partners; track partner) {
            <img [src]="partner" [alt]="i18n.t('aboutPage.partnerAlt')" width="96" height="96" loading="lazy">
          }
          <a class="become-partner" href="#contact">{{ i18n.t('aboutPage.becomePartner') }}</a>
        </div>
      </section>
    </main>`,
  styles: [`
    .about-page { overflow: hidden; background: #f2f2f2; }
    .intro-art { position: relative; isolation: isolate; }
    .intro-art::before { position: absolute; z-index: -1; inset: 0; content: ''; background: url('/images/bg-perspective-lines.webp') center 33% / cover no-repeat; opacity: .11; pointer-events: none; }
    .page-heading { padding-top: 54px; }
    .page-heading h1 { font-size: 36px; line-height: 1.2; font-weight: 400; }
    .breadcrumb { display: flex; align-items: center; gap: 16px; margin-top: 14px; font-size: 12px; }
    .breadcrumb a { text-decoration: none; }
    .breadcrumb a:hover { text-decoration: underline; text-underline-offset: 3px; }
    .breadcrumb > span:not([aria-current]) { color: #777; font-size: 18px; }
    .overview { padding-top: 56px; padding-bottom: 64px; }
    .overview h2 { max-width: 1400px; font-size: 23px; line-height: 1.34; font-weight: 400; }
    .overview > p { margin-top: 30px; color: #666; font-size: 14px; line-height: 1.65; }
    .overview > p + p { margin-top: 22px; }
    .values { display: grid; grid-template-columns: .92fr 1.15fr; gap: 96px; padding-block: 42px 116px; }
    .eyebrow { margin-bottom: 8px; color: #aaa; font-size: 14px; font-weight: 500; text-transform: uppercase; }
    .values-copy h2, .partners-intro h2 { font-size: 36px; line-height: 1.2; font-weight: 400; }
    .values-copy h2 { max-width: 530px; }
    .values-copy .body { max-width: 530px; margin-top: 46px; color: #666; font-size: 14px; line-height: 1.65; }
    .certificate { display: inline-block; margin-top: 42px; font-size: 14px; text-underline-offset: 3px; }
    .value-cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; padding-top: 34px; }
    .value-card img { width: 100%; aspect-ratio: 1.08 / 1; object-fit: cover; }
    .value-card h3 { margin-top: 18px; font-size: 18px; line-height: 1.25; font-weight: 400; }
    .value-card p { max-width: 300px; margin-top: 6px; color: #666; font-size: 14px; line-height: 1.45; }
    .value-card a { display: inline-flex; align-items: center; gap: 8px; margin-top: 28px; font-size: 14px; text-decoration: none; }
    .partners { padding-bottom: 112px; }
    .partners-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
    .partners-intro h2 { max-width: 550px; }
    blockquote { margin: 28px 0 0; }
    blockquote p { color: #666; font-size: 14px; line-height: 1.6; }
    blockquote cite { display: block; margin-top: 14px; font-size: 13px; font-style: normal; font-weight: 500; }
    .partner-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 96px)); justify-content: center; gap: 16px; margin-top: 70px; }
    .partner-grid > img, .become-partner { width: 96px; height: 96px; border-radius: 50%; }
    .partner-grid > img { object-fit: cover; }
    .partner-grid > img:nth-child(13) { grid-column-start: 2; }
    .become-partner { display: grid; place-items: center; padding: 12px; background: var(--color-primary); color: #111; text-align: center; font-size: 14px; line-height: 1.2; text-decoration: none; }
    .become-partner:hover { filter: brightness(.95); }
    @media (max-width: 1023px) {
      .page-heading { padding-top: 42px; }
      .overview { padding-top: 44px; padding-bottom: 46px; }
      .values { grid-template-columns: 1fr; gap: 30px; padding-block: 36px 76px; }
      .values-copy h2 { max-width: 650px; }
      .values-copy .body { margin-top: 24px; }
      .certificate { margin-top: 24px; }
      .value-cards { padding-top: 0; }
      .partners-intro { gap: 36px; }
      .partners { padding-bottom: 80px; }
      .partner-grid { grid-template-columns: repeat(8, minmax(0, 82px)); gap: 14px; margin-top: 48px; }
      .partner-grid > img, .become-partner { width: 82px; height: 82px; }
      .partner-grid > img:nth-child(13) { grid-column-start: auto; }
    }
    @media (max-width: 767px) {
      .intro-art::before { background-position: center 24%; }
      .page-heading { padding-top: 34px; }
      .page-heading h1 { font-size: 30px; }
      .breadcrumb { gap: 10px; font-size: 11px; }
      .overview { padding-top: 40px; padding-bottom: 36px; }
      .overview h2 { font-size: 20px; }
      .overview > p { margin-top: 22px; font-size: 13px; }
      .overview > p + p { margin-top: 16px; }
      .values { padding-block: 28px 54px; gap: 28px; }
      .eyebrow { font-size: 11px; }
      .values-copy h2, .partners-intro h2 { font-size: 28px; }
      .values-copy .body { font-size: 13px; }
      .value-cards { gap: 12px; }
      .value-card img { aspect-ratio: .95 / 1; }
      .value-card h3 { margin-top: 12px; font-size: 15px; }
      .value-card p { font-size: 12px; }
      .value-card a { margin-top: 18px; font-size: 12px; }
      .partners-intro { grid-template-columns: 1fr; gap: 16px; }
      blockquote { margin-top: 0; }
      blockquote p { font-size: 13px; }
      .partner-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 34px; }
      .partner-grid > img, .become-partner { width: 100%; height: auto; aspect-ratio: 1; }
      .partner-grid > img:nth-child(13) { grid-column-start: auto; }
      .become-partner { padding: 8px; font-size: 11px; }
      .partners { padding-bottom: 54px; }
    }
  `],
})
export class AboutPageComponent {
  readonly i18n = inject(I18nService);
  readonly partners = Array.from({ length: 21 }, (_, index) => `images/partners/partner-${String(index + 1).padStart(2, '0')}.png`);
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="services-page">
      <div class="intro-art">
        <div class="container page-heading">
          <h1>{{ i18n.t('services.title') }}</h1>
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">{{ i18n.t('services.home') }}</a><span>›</span><span aria-current="page">{{ i18n.t('services.title') }}</span></nav>
        </div>
        <section class="container overview">
          <h2>{{ i18n.t('services.overviewTitle') }}</h2>
          <p>{{ i18n.t('services.overviewText') }}</p>
          <ul class="checks"><li>✓ <span>{{ i18n.t('services.check1') }}</span></li><li>✓ <span>{{ i18n.t('services.check2') }}</span></li><li>✓ <span>{{ i18n.t('services.check3') }}</span></li></ul>
        </section>
      </div>

      <section class="container services" aria-labelledby="services-title">
        <p class="eyebrow">{{ i18n.t('services.explore') }}</p>
        <h2 id="services-title">{{ i18n.t('services.heading') }}</h2>
        <p class="description">{{ i18n.t('services.description') }}</p>
        <div class="service-grid">
          @for (service of serviceItems; track service.title) {
            <article class="service-card">
              <img [src]="service.icon" alt="" width="58" height="58" loading="lazy">
              <h3>{{ i18n.t(service.title) }}</h3>
              <p>{{ i18n.t(service.description) }}</p>
              <a href="#">{{ i18n.t('readMoreTitle') }} <app-icon name="chevron-right" [size]="13" /></a>
            </article>
          }
        </div>
      </section>

      <section class="container partners" aria-labelledby="partners-title">
        <p class="eyebrow">{{ i18n.t('services.partners') }}</p>
        <h2 id="partners-title">{{ i18n.t('services.partnersHeading') }}</h2>
        <p class="description">{{ i18n.t('services.description') }}</p>
        <div class="partner-grid" aria-label="Trusted partners">
          @for (brand of brands; track brand.name) { <div [class]="'brand ' + brand.class"><span>{{ brand.name }}</span></div> }
        </div>
      </section>
    </main>`,
  styles: [`
    .services-page { overflow: hidden; background:#f2f2f2; }
    .intro-art { position:relative; isolation:isolate; }
    .intro-art::before { position:absolute; z-index:-1; inset:0; content:''; background:url('/images/bg-perspective-lines.webp') center 33% / cover no-repeat; opacity:.11; pointer-events:none; }
    .container { width:min(100% - 48px, 936px); }
    .page-heading { padding-top:54px; }
    .page-heading h1 { font-size:34px; line-height:1.2; font-weight:400; }
    .breadcrumb { display:flex; align-items:center; gap:16px; margin-top:8px; font-size:11px; }
    .breadcrumb a { text-decoration:none; }
    .breadcrumb > span:not([aria-current]) { color:#555; font-size:17px; }
    .overview { padding-top:39px; padding-bottom:78px; }
    .overview h2 { font-size:21px; line-height:1.3; font-weight:400; }
    .hl { background:linear-gradient(transparent 81%,#ffdf00 81%,#ffdf00 95%,transparent 95%); }
    .overview > p,.description { color:#666; font-size:12px; line-height:1.65; }
    .overview > p { margin-top:32px; }
    .checks { margin:16px 0 0; padding:0; list-style:none; color:#171717; font-size:13px; line-height:1.8; }
    .checks li { display:flex; gap:9px; align-items:baseline; }
    .checks li span { color:#666; }
    .services { padding-bottom:78px; }
    .eyebrow { margin-bottom:5px; color:#aaa; font-size:13px; line-height:1.2; font-weight:600; text-transform:uppercase; }
    .services h2,.partners h2 { font-size:32px; line-height:1.25; font-weight:400; }
    .services .description,.partners .description { margin-top:16px; }
    .service-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:28px; margin-top:27px; }
    .service-card img { width:52px; height:52px; object-fit:contain; }
    .service-card h3 { min-height:44px; margin-top:16px; font-size:16px; line-height:1.35; font-weight:400; }
    .service-card p { min-height:57px; margin-top:6px; color:#666; font-size:12px; line-height:1.4; }
    .service-card a { display:inline-flex; align-items:center; gap:6px; margin-top:12px; font-size:12px; text-decoration:none; }
    .service-card a:hover { text-decoration:underline; text-underline-offset:3px; }
    .partners { padding-bottom:84px; }
    .partners h2 { max-width:700px; }
    .partner-grid { display:grid; grid-template-columns:repeat(6,minmax(0,1fr)); gap:10px; margin-top:28px; }
    .brand { display:grid; min-height:96px; place-items:center; padding:12px; background:#fafafa; border:1px solid #e3e3e3; }
    .brand span { white-space:nowrap; font-size:18px; font-weight:700; letter-spacing:-.04em; }
    .amazon span { color:#111; }.amazon span::after { content:''; display:block; height:3px; width:38px; margin:-1px auto 0; border-bottom:2px solid #f90; border-radius:50%; }
    .airbnb span { color:#ff5a68; }.asana span { color:#333; }.asana span::before { content:'● '; color:#f36c75; font-size:13px; }
    .framer span { color:#111; }.lattice span { color:#394263; }.lattice span::before { content:'✣ '; color:#20b6a8; }
    .trello span { color:#345276; }.monday span { color:#444; font-size:16px; }.monday span::before { content:'● '; color:#fb526b; }
    .afterpay span { color:#111; }.invision span { color:#ff3264; }.slack span { color:#252525; }.slack span::before { content:'✣ '; color:#27b9a7; }
    .gitlab span { color:#88909e; }.gitlab span::before { content:'◆ '; color:#ef6c50; }.paypal span { color:#1675a9; font-style:italic; }
    @media(max-width:1023px) {
      .page-heading { padding-top:42px; }.overview { padding-top:35px; padding-bottom:64px; }
      .services { padding-bottom:64px; }.service-grid { grid-template-columns:repeat(2,minmax(0,1fr)); row-gap:32px; }
      .service-card h3,.service-card p { min-height:0; }.partners { padding-bottom:64px; }.partner-grid { grid-template-columns:repeat(4,minmax(0,1fr)); }
    }
    @media(max-width:767px) {
      .container { width:min(100% - 40px,936px); }
      .intro-art::before { background-position:center 24%; }.page-heading { padding-top:34px; }.page-heading h1 { font-size:30px; }
      .breadcrumb { gap:10px; font-size:11px; }.overview { padding-top:34px; padding-bottom:45px; }
      .overview h2 { font-size:19px; }.desktop-break { display:none; }
      .overview > p { margin-top:21px; font-size:12px; }.checks { font-size:12px; }
      .services { padding-bottom:50px; }.eyebrow { font-size:11px; }.services h2,.partners h2 { font-size:26px; }
      .services .description,.partners .description { margin-top:12px; font-size:12px; }
      .service-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:28px 18px; margin-top:24px; }
      .service-card img { width:48px; height:48px; }.service-card h3 { margin-top:12px; font-size:14px; }
      .service-card p { font-size:11px; }.service-card a { font-size:11px; }
      .partners { padding-bottom:50px; }.partner-grid { grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px; margin-top:22px; }
      .brand { min-height:72px; padding:6px; }.brand span { font-size:14px; }.monday span { font-size:12px; }
    }
  `],
})
export class ServicesPageComponent {
  readonly i18n = inject(I18nService);
  readonly serviceItems = [
    { icon: '/icons/icons/Icon.svg', title: 'services.card1Title', description: 'services.card1Text' },
    { icon: '/icons/icons/Icon (2).svg', title: 'services.card2Title', description: 'services.card2Text' },
    { icon: '/icons/icons/Icon (3).svg', title: 'services.card3Title', description: 'services.card3Text' },
    { icon: '/icons/icons/Icon (4).svg', title: 'services.card4Title', description: 'services.card4Text' },
  ];
  readonly brands = [
    { name:'amazon', class:'amazon' }, { name:'airbnb', class:'airbnb' }, { name:'asana', class:'asana' }, { name:'Framer', class:'framer' }, { name:'Lattice', class:'lattice' }, { name:'Trello', class:'trello' },
    { name:'monday.com', class:'monday' }, { name:'afterpay', class:'afterpay' }, { name:'invision', class:'invision' }, { name:'slack', class:'slack' }, { name:'GitLab', class:'gitlab' }, { name:'PayPal', class:'paypal' },
  ];
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="contact-page">
      <div class="intro-art">
        <div class="container page-heading">
          <h1>{{ i18n.t('contactPage.title') }}</h1>
          <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">{{ i18n.t('contactPage.home') }}</a><span>›</span><span aria-current="page">{{ i18n.t('contactPage.title') }}</span></nav>
        </div>
        <section class="container intro">
          <h2>{{ i18n.t('contactPage.introA') }} <span class="hl">{{ i18n.t('contactPage.introHighlight') }}</span> {{ i18n.t('contactPage.introB') }}</h2>
        </section>
        <section class="container cards" aria-label="Contact options">
          <article class="card">
            <h3>{{ i18n.t('contactPage.information') }}</h3>
            <p class="sub">{{ i18n.t('contactPage.informationSub') }}</p>
            <div class="detail"><h4>{{ i18n.t('contactPage.phone') }}</h4><a href="tel:+08505447514">+0(850) 544 7514</a></div>
            <div class="detail"><h4>{{ i18n.t('contactPage.mail') }}</h4><a href="mailto:hello@crosson.com">hello&#64;crosson.com</a></div>
            <div class="detail"><h4>{{ i18n.t('contactPage.address') }}</h4><p>One Apple Park Way; Cupertino CA<br>95014, U.S.A.</p></div>
            <div class="actions"><a class="btn" href="https://maps.google.com/?q=One+Apple+Park+Way+Cupertino+CA+95014" target="_blank" rel="noreferrer">{{ i18n.t('contactPage.direction') }} <app-icon name="chevron-right" [size]="16" /></a><a class="map" href="https://maps.google.com/?q=One+Apple+Park+Way+Cupertino+CA+95014" target="_blank" rel="noreferrer">{{ i18n.t('contactPage.seeMap') }}</a></div>
          </article>
          <article class="card">
            <h3>{{ i18n.t('contactPage.support') }}</h3>
            <p class="sub">{{ i18n.t('contactPage.supportSub') }}</p>
            <div class="detail"><h4>{{ i18n.t('contactPage.supportPhone') }}</h4><a href="tel:+08505447514">+0(850) 544 7514</a></div>
            <div class="detail"><h4>{{ i18n.t('contactPage.supportMail') }}</h4><a href="mailto:hello@crosson.com">hello&#64;crosson.com</a></div>
            <div class="detail"><h4>{{ i18n.t('contactPage.requestForm') }}</h4><p>{{ i18n.t('contactPage.requestText') }}</p></div>
            <div class="actions"><a class="btn" href="mailto:hello@crosson.com?subject=Support%20Request">{{ i18n.t('contactPage.request') }} <app-icon name="chevron-right" [size]="16" /></a></div>
          </article>
          <article class="card survey">
            <h3>{{ i18n.t('contactPage.survey') }}</h3>
            <p class="sub">{{ i18n.t('contactPage.surveySub') }}</p>
            <div class="detail"><h4>{{ i18n.t('contactPage.codeQuestion') }}</h4><p>{{ i18n.t('contactPage.codeAnswer') }}</p></div>
            <div class="detail survey-mail"><h4>{{ i18n.t('contactPage.supportMail') }}</h4><a href="mailto:hello@crosson.com">hello&#64;crosson.com</a></div>
            <div class="actions"><a class="btn" href="mailto:hello@crosson.com?subject=Service%20Evaluation">{{ i18n.t('contactPage.rate') }} <app-icon name="chevron-right" [size]="16" /></a></div>
          </article>
        </section>
      </div>
    </main>`,
  styles: [`
    .contact-page { overflow:hidden; background:#f2f2f2; }
    .intro-art { position:relative; isolation:isolate; padding-bottom:108px; }
    .intro-art::before { position:absolute; z-index:-1; inset:0; content:''; background:url('/images/bg-perspective-lines.webp') center 34% / cover no-repeat; opacity:.11; pointer-events:none; }
    .container { width:min(100% - 48px,1188px); }
    .page-heading { padding-top:70px; }
    .page-heading h1 { font-size:40px; line-height:1.2; font-weight:400; }
    .breadcrumb { display:flex; align-items:center; gap:16px; margin-top:10px; font-size:12px; }
    .breadcrumb a { text-decoration:none; }.breadcrumb > span:not([aria-current]) { color:#555; font-size:18px; }
    .intro { padding-top:50px; }
    .intro h2 { max-width:880px; font-size:25px; line-height:1.35; font-weight:400; }
    .hl { background:linear-gradient(transparent 81%,#ffdf00 81%,#ffdf00 95%,transparent 95%); }
    .cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; margin-top:48px; }
    .card { display:flex; flex-direction:column; min-height:448px; padding:34px 40px 32px; background:#fff; border:1px solid #e2e2e2; }
    .card h3 { font-size:19px; line-height:1.3; font-weight:400; }
    .sub { max-width:260px; min-height:48px; margin-top:3px; color:#666; font-size:14px; line-height:1.45; }
    .detail { margin-top:22px; }.detail h4 { margin-bottom:5px; color:#999; font-size:11px; line-height:1.2; font-weight:600; text-transform:uppercase; }
    .detail p,.detail a { font-size:14px; line-height:1.65; }.detail a { text-decoration:none; }.detail a:hover { text-decoration:underline; }
    .actions { display:flex; align-items:center; gap:18px; margin-top:auto; padding-top:24px; }
    .btn { display:inline-flex; align-items:center; justify-content:space-between; gap:32px; min-width:186px; height:40px; padding:0 16px 0 24px; background:#ffd800; color:#111; font-size:14px; text-decoration:none; }
    .btn:hover { filter:brightness(.95); }.map { font-size:13px; text-underline-offset:3px; white-space:nowrap; }
    .survey-mail { margin-top:auto; padding-top:24px; }
    @media(max-width:1023px) {
      .container { width:min(100% - 48px,1188px); }.page-heading { padding-top:52px; }
      .intro-art { padding-bottom:76px; }.intro { padding-top:40px; }.cards { gap:12px; margin-top:36px; }
      .card { min-height:440px; padding:26px 22px; }.btn { min-width:155px; padding-inline:15px; gap:20px; }.actions { gap:12px; }
    }
    @media(max-width:767px) {
      .container { width:min(100% - 40px,1188px); }.page-heading { padding-top:35px; }.page-heading h1 { font-size:31px; }
      .breadcrumb { gap:11px; font-size:11px; }.intro { padding-top:35px; }.intro h2 { font-size:20px; }
      .cards { grid-template-columns:1fr; gap:14px; margin-top:28px; }.card { min-height:0; padding:25px 24px; }
      .sub { min-height:0; }.detail { margin-top:20px; }.actions { margin-top:25px; padding-top:0; }
      .survey-mail { margin-top:20px; padding-top:0; }.intro-art { padding-bottom:48px; }
    }
  `],
})
export class ContactPageComponent {
  readonly i18n = inject(I18nService);
}

import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer" id="contact">
      <div class="container contact">
        <h2>{{ i18n.t('footer.questions') }}<br>{{ i18n.t('footer.contact') }}</h2>
        <p class="item"><app-icon name="phone" [size]="32" /><span><small>{{ i18n.t('footer.phone') }}</small>+0(850) 544 7514</span></p>
        <p class="item"><app-icon name="mail" [size]="32" /><span><small>{{ i18n.t('footer.email') }}</small>hello&#64;crosson.com</span></p>
        <p class="item"><app-icon name="pin" [size]="32" /><span><small>{{ i18n.t('footer.headquarters') }}</small>One Apple Park Way, Cupertino<br>CA 95014, U.S.A.<a href="#">{{ i18n.t('footer.direction') }}</a></span></p>
      </div>
      <div class="container cols">
        @for (c of columns; track c.title) {
          <nav [attr.aria-label]="i18n.t(c.title)"><h3>{{ i18n.t(c.title) }}</h3>
            <ul>@for (l of c.links; track l) {<li><a [href]="linkFor(l)">{{ i18n.t(l) }}</a></li>}</ul></nav>
        }
        <div class="career"><div class="career-heading"><svg class="career-icon" viewBox="0 0 40 48" aria-hidden="true"><path d="M19 9c-5-6-13-1-10 5-7 1-5 11 1 11-2 7 8 10 12 4 6 3 11-3 7-8 6-5 1-13-6-11-1-3-2-4-4-5Z" fill="#d7dadd"/><path d="M18 23h5v22h-5zM15 29h3v2h-3zm8 2h4v2h-4zm-8 5h3v2h-3zm8 2h4v2h-4z" fill="#b8bdc1"/><path d="M16 45h9" stroke="#858b90" stroke-width="1.5"/></svg><h3>{{ i18n.t('career.title') }}</h3></div>
          <p>{{ i18n.t('career.text') }}</p>
          <a class="btn" href="#">{{ i18n.t('career.openings') }} <app-icon name="chevron-right" [size]="14" /></a></div>
      </div>
      <div class="container legal">
        <span>{{ i18n.t('footer.copyright') }}</span>
        <span>Website Developed By Nadir Jamal</span>
        <span><a href="#">{{ i18n.t('footer.privacy') }}</a> &nbsp;|&nbsp; <a href="#">{{ i18n.t('footer.terms') }}</a></span>
      </div>
    </footer>`,
  styles: [`
    .footer { position: relative; isolation: isolate; overflow: hidden; background: #fff; border-top: 1px solid var(--color-border); padding-top: 72px; }
    .footer::before { position: absolute; z-index: -1; inset: 0; content: ''; background: url('/images/bg-curve-a.webp') center center / cover no-repeat; opacity: .16; pointer-events: none; }
    .contact { display: grid; grid-template-columns: 2.3fr .9fr .9fr 1.3fr; gap: 24px; align-items: start; }
    h2 { font-size: 28px; font-weight: 400; line-height: 1.3; }
    .item { display: flex; gap: 10px; align-items: flex-start; margin: 0; font-size: 15px; line-height: 1.4; }
    small { display: block; font-size: 10px; color: #777; }
    .item a { display: block; margin-top: 6px; font-size: 11px; }
    .cols { display: grid; grid-template-columns: .85fr 1.2fr 1.35fr 1.25fr; gap: 24px; padding-block: 112px 52px; }
    h3 { margin-bottom: 24px; font-size: 24px; font-weight: 400; }
    ul { margin: 0; padding: 0; list-style: none; }
    li { margin-bottom: 16px; font-size: 12px; } li a { text-decoration: none; }
    li a:hover { text-decoration: underline; }
    .career-heading { display: flex; align-items: center; gap: 18px; }
    .career-heading h3 { margin-bottom: 24px; white-space: nowrap; }
    .career-icon { flex: none; width: 42px; height: 48px; margin-top: -20px; }
    .career p { max-width: 340px; font-size: 12px; line-height: 1.6; } .career .btn { margin-top: 24px; min-width: 0; width: 224px; }
    .legal { display: flex; justify-content: space-between; gap: 16px; padding-block: 28px 32px; font-size: 10px; border-top: 1px solid rgba(0,0,0,.04); }
    @media (max-width: 1023px) { .contact { grid-template-columns: 1fr 1fr; } .contact h2 { grid-column: 1 / -1; } .cols { grid-template-columns: 1fr 1fr; padding-top: 64px; } .legal { flex-direction: column; } }
    @media (max-width: 767px) { .contact, .cols { grid-template-columns: 1fr; } .footer { padding-top: 40px; } .cols { padding-block: 44px 30px; } h3 { font-size: 20px; margin-bottom: 14px; } .career-heading h3 { margin-bottom: 14px; } .career-icon { width: 34px; height: 40px; margin-top: -10px; } .legal { padding-block: 20px 24px; } }`],
})
export class FooterComponent {
  readonly i18n = inject(I18nService);
  linkFor(key: string): string {
    if (key === 'footer.about') return '/about';
    if (key === 'footer.news') return '/news';
    if (key === 'footer.contactLink') return '/contact';
    return '#';
  }

  readonly columns = [
    { title: 'footer.products', links: ['footer.filling', 'footer.bottleSeries', 'footer.package', 'footer.linear', 'footer.rotary'] },
    { title: 'footer.solutions', links: ['footer.endline', 'footer.software', 'footer.research', 'footer.conveyor', 'footer.special'] },
    { title: 'footer.corporate', links: ['footer.about', 'footer.values', 'footer.hr', 'footer.news', 'footer.contactLink'] },
  ];
}

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="header">
      <div class="top container">
        <a class="help" href="tel:+08505447514">
          <app-icon name="phone" [size]="24" />
          <span><small>{{ i18n.t('help') }}</small>+0(850) 544 7514</span>
        </a>
        <a class="logo" href="/" aria-label="Crosson home">Crosson</a>
        <div class="right">
          <a href="#" aria-label="LinkedIn"><app-icon name="linkedin" [size]="18" /></a>
          <a href="#" aria-label="Instagram"><app-icon name="instagram" [size]="18" /></a>
          <a href="#" aria-label="Twitter"><app-icon name="twitter" [size]="18" /></a>
          <label class="lang"><app-icon name="globe" [size]="24" /><span><small>{{ i18n.t('language.label') }}</small>
            <select [attr.aria-label]="i18n.t('language.choose')" [value]="i18n.language()" (change)="i18n.setLanguage($any($event.target).value)">
              <option value="en">English</option>
              <option value="zh">&#20013;&#25991; (Chinese)</option>
              <option value="hi">&#2361;&#2367;&#2344;&#2381;&#2342;&#2368; (Hindi)</option>
            </select>
          </span></label>
          <button class="burger" type="button" [attr.aria-expanded]="open()" aria-controls="main-nav"
                  aria-label="Toggle menu" (click)="open.set(!open())">
            <app-icon [name]="open() ? 'close' : 'menu'" [size]="26" />
          </button>
        </div>
      </div>
      <nav id="main-nav" class="nav" [class.open]="open()" aria-label="Main">
        <ul class="container">
          @for (l of links; track l.key) {
            <li><a [href]="l.href" (click)="open.set(false)">{{ i18n.t(l.key) }}@if (l.caret) {<app-icon name="chevron-down" [size]="12" />}</a></li>
          }
        </ul>
      </nav>
    </header>`,
  styles: [`
    .header { position: relative; z-index: 10; background: #fff; }
    .top { display: flex; align-items: center; justify-content: space-between; height: 54px; }
    .help, .lang { display: flex; align-items: center; gap: 10px; text-decoration: none; font-size: 14px; flex: 1; }
    small { display: block; font-size: 11px; color: #777; }
    .logo { font-size: 26px; font-weight: 700; text-decoration: none; letter-spacing: -.01em; }
    .right { display: flex; align-items: center; justify-content: flex-end; gap: 28px; flex: 1; font-size: 14px; }
    .lang { flex: none; }
    .lang select { max-width: 120px; padding: 0; border: 0; background: transparent; color: inherit; font: inherit; cursor: pointer; }
    .lang select:focus-visible { outline-offset: 2px; }
    .burger { display: none; background: none; border: 0; padding: 4px; color: inherit; }
    .nav { border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
    .nav ul { display: flex; justify-content: center; gap: 36px; list-style: none; margin-inline: auto; padding: 0; height: 42px; align-items: center; }
    .nav a { display: inline-flex; align-items: center; gap: 6px; text-decoration: none; font-size: 12px; }
    .nav a:hover { text-decoration: underline; text-decoration-color: var(--color-primary); text-underline-offset: 6px; }
    @media (max-width: 1023px) { .nav ul { gap: 28px; } .right { gap: 18px; } }
    @media (max-width: 767px) {
      .top { height: 64px; } .help span { display: none; } .help { flex: 1; } .logo { font-size: 26px; }
      .lang { display: flex; gap: 4px; } .lang > app-icon { width: 20px; height: 20px; } .lang span small { display: none; }
      .lang select { width: 74px; max-width: none; font-size: 11px; }
      .right a, .right { gap: 14px; } .right a { display: none; } .burger { display: inline-flex; }
      .nav { display: none; } .nav.open { display: block; }
      .nav ul { flex-direction: column; align-items: flex-start; height: auto; gap: 0; padding-block: 8px; }
      .nav li { width: 100%; } .nav a { width: 100%; padding: 14px 0; border-bottom: 1px solid var(--color-border); }
    }`],
})
export class HeaderComponent {
  readonly i18n = inject(I18nService);
  readonly open = signal(false);
  readonly links = [
    { key: 'nav.products', href: '/#solutions', caret: true }, { key: 'nav.solutions', href: '/#solutions', caret: false },
    { key: 'nav.software', href: '/#solutions', caret: false }, { key: 'nav.services', href: '/services', caret: false },
    { key: 'nav.corporate', href: '/about', caret: false }, { key: 'nav.news', href: '/news', caret: false },
    { key: 'nav.contact', href: '/contact', caret: false },
  ];
}

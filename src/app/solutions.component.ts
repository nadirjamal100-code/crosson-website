import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { IconComponent } from './icon.component';
import { I18nService } from './i18n.service';

interface Tab { label: string; icon: string; }
interface Machine { name: string; image: string; }

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="solutions" id="solutions">
      <img class="bg" src="images/bg-perspective-lines.webp" alt="" loading="lazy" width="1828" height="1143">
      <div class="container intro">
        <div>
          <p class="eyebrow">{{ i18n.t('solutions.eyebrow') }}</p>
          <h2 class="title">{{ i18n.t('solutions.titleA') }} <span class="hl">{{ i18n.t('solutions.titleB') }}</span> {{ i18n.t('solutions.titleC') }}</h2>
        </div>
        <a class="watch" href="#"><span class="ico"><app-icon name="video" [size]="22" /></span>
          <span><b>{{ i18n.t('solutions.watch') }}</b><small>2.34Min, 14.7MB</small></span></a>
      </div>
      <div class="container tabs" role="tablist" [attr.aria-label]="i18n.t('nav.solutions')">
        @for (t of tabs; track t.label; let i = $index) {
          <button type="button" role="tab" [attr.aria-selected]="active() === i" [class.on]="active() === i" (click)="active.set(i)">
            <img [src]="t.icon" alt="" width="57" height="57"><span>{{ i18n.t(t.label) }}</span>
          </button>
        }
      </div>
      <div class="panel-wrap">
        <div class="container panel">
          <div class="main">
            <h3>{{ i18n.t(current().label) }}</h3>
            @if (active() === 0) {
              <p>{{ i18n.t('machine.description') }} <a href="#">{{ i18n.t('readMore') }} ›</a></p>
              <ul class="machines">
                @for (m of machines; track m.name) {
                  <li><img [src]="m.image" [alt]="i18n.t(m.name)" width="290" height="190" loading="lazy"><span>{{ i18n.t(m.name) }}</span></li>
                }
              </ul>
            }
          </div>
          <aside id="contact-card">
            <div class="meeting"><div><b>{{ i18n.t('meeting.title') }}</b><small>{{ i18n.t('meeting.available') }} <i></i></small></div><img class="meeting-icon" src="icons/icons/Icon (7).svg" alt="" width="48" height="48"></div>
            <h4>{{ i18n.t('contact.interested') }}</h4>
            <p class="row"><app-icon name="phone" [size]="22" /><span><small>{{ i18n.t('sales.manager') }}</small>+0(850) 544 7514</span></p>
            <p class="row"><app-icon name="mail" [size]="22" /><span><small>{{ i18n.t('sales.department') }}</small>sales&#64;crosson.com</span></p>
          </aside>
        </div>
      </div>
    </section>`,
  styles: [`
    .solutions { position: relative; background: linear-gradient(#fff, #f3f3f3 30%, #fff); }
    .bg { position: absolute; top: 0; left: 0; width: 100%; height: 620px; object-fit: cover; object-position: center center; opacity: .13; pointer-events: none; }
    .intro { position: relative; display: flex; justify-content: space-between; align-items: flex-start; gap: 40px; padding-top: 72px; }
    .title { max-width: 760px; }
    .watch { display: flex; align-items: center; gap: 14px; margin-top: 48px; text-decoration: none; }
    .watch b { font-size: 28px; font-weight: 400; white-space: nowrap; }
    .ico { display: grid; place-items: center; width: 60px; height: 60px; border-radius: 50%; background: var(--color-primary); }
    small { display: block; font-size: 11px; color: #777; }
    .tabs { position: relative; display: grid; grid-template-columns: repeat(5, 1fr); margin-top: 100px; }
    .tabs button { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 24px 12px; height: 110px; background: transparent; border: 0; font-size: 14px; color: var(--color-text); }
    .tabs button img { width: 48px; height: 48px; object-fit: contain; }
    .tabs button.on { background: #fff; border: 1px solid var(--color-border); border-bottom: 0; height: 128px; margin-top: -18px; }
    .panel-wrap { position: relative; background: #fff; border-block: 1px solid var(--color-border); }
    .panel { display: grid; grid-template-columns: 1fr 460px; gap: 60px; padding-block: 40px 56px; }
    .main h3 { font-size: 20px; font-weight: 400; }
    .main > p { max-width: 790px; margin-top: 12px; font-size: 12px; line-height: 1.6; color: var(--color-text-muted); }
    .main a { color: var(--color-link); font-weight: 500; text-decoration: none; }
    .machines { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 28px 0 0; padding: 0; list-style: none; max-width: 700px; }
    .machines img { width: 100%; height: auto; aspect-ratio: 290 / 190; object-fit: cover; background: #eee; }
    .machines span { display: block; margin-top: 8px; font-size: 12px; text-align: center; }
    aside { padding-top: 0; }
    .meeting { display: flex; justify-content: space-between; align-items: center; padding: 18px 22px; background: #fafafa; border-bottom: 2px solid var(--color-primary); font-size: 13px; }
    .meeting-icon { width: 48px; height: 48px; object-fit: contain; }
    .meeting small i { display: inline-block; width: 6px; height: 6px; margin-left: 4px; border-radius: 50%; background: #3ac47d; }
    aside h4 { margin: 24px 0 16px; font-size: 16px; font-weight: 400; line-height: 1.4; }
    .row { display: flex; gap: 10px; align-items: center; margin: 12px 0; font-size: 12px; }
    @media (max-width: 1023px) {
      .intro { flex-direction: column; gap: 0; } .watch { margin-top: 24px; } .tabs { margin-top: 48px; grid-template-columns: repeat(5, minmax(120px, 1fr)); overflow-x: auto; }
      .panel { grid-template-columns: 1fr; gap: 32px; }
    }
    @media (max-width: 767px) { .watch b { font-size: 22px; white-space: normal; } .machines { grid-template-columns: 1fr; } }`],
})
export class SolutionsComponent {
  readonly i18n = inject(I18nService);
  readonly tabs: Tab[] = [
    { label: 'tab.filling', icon: 'icons/icons/Icon (4).svg' }, { label: 'tab.endline', icon: 'icons/icons/Icon (3).svg' },
    { label: 'tab.software', icon: 'icons/icons/Icon (5).svg' }, { label: 'tab.support', icon: 'icons/icons/Icon (6).svg' },
    { label: 'tab.special', icon: 'icons/icons/Icon (8).svg' },
  ];
  readonly machines: Machine[] = [
    { name: 'machine.linear', image: 'images/machine-linear.webp' },
    { name: 'machine.rotary', image: 'images/machine-rotary.webp' },
    { name: 'machine.bottle', image: 'images/machine-bottle-filling.webp' },
  ];
  readonly active = signal(0);
  readonly current = computed(() => this.tabs[this.active()]);
}

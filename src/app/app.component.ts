import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { HeaderComponent } from './header.component';
import { AboutPageComponent } from './about-page.component';
import { ServicesPageComponent } from './services-page.component';
import { ContactPageComponent } from './contact-page.component';
import { NewsListPageComponent } from './news-list-page.component';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { SolutionsComponent } from './solutions.component';
import { JourneyComponent } from './journey.component';
import { NewsComponent } from './news.component';
import { FooterComponent } from './footer.component';
import { NewsDetailPageComponent } from './news-detail-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutPageComponent, ServicesPageComponent, ContactPageComponent, NewsListPageComponent, NewsDetailPageComponent, HeroComponent, AboutComponent, SolutionsComponent, JourneyComponent, NewsComponent, FooterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-header />
    @if (isNewsDetailPage()) {
      <app-news-detail-page />
    } @else if (isNewsPage()) {
      <app-news-list-page />
    } @else if (isContactPage()) {
      <app-contact-page />
    } @else if (isServicesPage()) {
      <app-services-page />
    } @else if (isAboutPage()) {
      <app-about-page />
    } @else {
      <main>
        <app-hero />
        <app-about />
        <app-solutions />
        <app-journey />
        <app-news />
      </main>
    }
    <app-footer />`,
})
export class AppComponent {
  readonly isAboutPage = signal(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/about');
  readonly isServicesPage = signal(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/services');
  readonly isContactPage = signal(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/contact');
  readonly isNewsPage = signal(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/news');
  readonly isNewsDetailPage = signal(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '').startsWith('/news/'));

  @HostListener('window:popstate')
  syncPage(): void {
    this.isAboutPage.set(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/about');
    this.isServicesPage.set(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/services');
    this.isContactPage.set(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/contact');
    this.isNewsPage.set(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '') === '/news');
    this.isNewsDetailPage.set(typeof window !== 'undefined' && window.location.pathname.replace(/\/$/, '').startsWith('/news/'));
  }
}

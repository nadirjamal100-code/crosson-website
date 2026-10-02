import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'phone' | 'mail' | 'pin' | 'chevron-down' | 'chevron-right' | 'linkedin' | 'instagram' | 'twitter'
  | 'globe' | 'box' | 'bottle' | 'gauge' | 'line' | 'database' | 'headset' | 'bulb' | 'calendar' | 'video' | 'menu' | 'close';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg [attr.width]="size()" [attr.height]="size()" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (name()) {
        @case ('phone') { <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/> }
        @case ('mail') { <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/> }
        @case ('pin') { <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.800-7 11-7 11z"/><circle cx="12" cy="10" r="2.500"/> }
        @case ('chevron-down') { <path d="m6 9 6 6 6-6"/> }
        @case ('chevron-right') { <path d="m9 6 6 6-6 6"/> }
        @case ('linkedin') { <path d="M6 9v9M6 6v.01M10 18v-9m0 4a3 3 0 0 1 6 0v5"/> }
        @case ('instagram') { <rect x="4" y="4" width="16" height="16" rx="5"/><circle cx="12" cy="12" r="3.500"/><path d="M16.500 7.500v.01"/> }
        @case ('twitter') { <path d="M21 6.500a7 7 0 0 1-2 .6 3.500 3.500 0 0 0 1.500-2 7 7 0 0 1-2.200.9 3.500 3.500 0 0 0-6 3.200A10 10 0 0 1 5 5.500a3.500 3.500 0 0 0 1 4.700 3.500 3.500 0 0 1-1.600-.4 3.500 3.500 0 0 0 2.800 3.500 3.500 3.500 0 0 1-1.600.1 3.500 3.500 0 0 0 3.300 2.400A7 7 0 0 1 4 17.200 10 10 0 0 0 9.400 19c6.500 0 10-5.500 9.800-10.300A7 7 0 0 0 21 6.500z"/> }
        @case ('globe') { <circle class="accent" cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/><path d="M7 7.5 9 6l1 2-2 1.5zm7 8 2-1 1.5 2-2.5 1.5z" fill="#171717" stroke="none"/> }
        @case ('box') { <path d="M4 10h16v9H4z" fill="#ffd800"/><path d="M3 19h18M6 10V7h12v3M7 13h4v4H7zm6 0h5v2h-5zm0 3h5v1h-5zM9 7V4h6v3M2 20h20"/><path d="M4 9h16"/> }
        @case ('bottle') { <path d="M10 3h4v3l2 2v13H8V8l2-2z" fill="#ffd800"/><path d="M10 3h4v3l2 2v13H8V8l2-2zM8 12h8M10 6h4M6 21h12"/> }
        @case ('gauge') { <circle class="accent" cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6.5" fill="#fff"/><path d="M12 12 16.5 8M7 17h10"/><circle cx="12" cy="12" r="1.5" fill="#ffd800"/> }
        @case ('line') { <path d="M4 6h10v13H4z" fill="#ffd800"/><path d="M4 6h10v13H4zM14 10h3v9a2 2 0 0 1-2 2H9M7 9h4v4H7zM7 15h4"/><path d="M17 12h3v8h-3"/> }
        @case ('database') { <path d="M5 6c0-1.7 3-3 7-3s7 1.3 7 3v12c0 1.7-3 3-7 3s-7-1.3-7-3z" fill="#ffd800"/><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3 3 7 3s7-1.3 7-3M5 17c0 1.7 3 3 7 3s7-1.3 7-3"/><path d="M14 20c1-2 3-3 5-2l2 2-3 2-2-1" fill="#fff"/> }
        @case ('headset') { <path d="M4 13a8 8 0 0 1 16 0v5h-4v-6h4M4 13v5h4v-6H4" fill="#ffd800"/><path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3zM17 19a4 4 0 0 1-4 2"/> }
        @case ('bulb') { <path d="M9 17h6v2H9zM10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" fill="#ffd800"/><path d="M12 1v2M3.5 5l2 1M20.5 5l-2 1M5 12H2M22 12h-3M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/> }
        @case ('calendar') { <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/> }
        @case ('video') { <circle class="accent" cx="12" cy="12" r="9"/><path d="M8 9h7a1 1 0 0 1 1 1v5H8z" fill="#177bb5"/><path d="M8 9h7a1 1 0 0 1 1 1v5H8zM16 11l3-2v7l-3-2M11 15l1 3"/> }
        @case ('menu') { <path d="M4 7h16M4 12h16M4 17h16"/> }
        @case ('close') { <path d="M6 6l12 12M18 6 6 18"/> }
      }
    </svg>`,
  styles: [':host { display: inline-flex; line-height: 0; color: #171717; } .accent { fill: #ffd800; stroke: #171717; }'],
})
export class IconComponent {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}

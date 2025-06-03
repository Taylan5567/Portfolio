import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MobileHeaderComponent,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private languageService: AppComponent) {
    this.languageService.getCurrentLanguage();
  }
  switchLang(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  ngOnInit(): void {}

  checklanguage(lang: string): boolean {
    return this.languageService.getCurrentLanguage() === lang;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -122;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolled to top');
  }
}

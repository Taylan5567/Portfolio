import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HeaderComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Özguer Taylan Umucu';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');

    const savedLang = localStorage.getItem('appLanguage');
    const langToUse =
      savedLang && this.translate.getLangs().includes(savedLang)
        ? savedLang
        : 'en';

    this.translate.use(langToUse);
  }

  switchLanguage(lang: string) {
    if (this.translate.getLangs().includes(lang)) {
      this.translate.use(lang);
      localStorage.setItem('appLanguage', lang);
    }
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }
}

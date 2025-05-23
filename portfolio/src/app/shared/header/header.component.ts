import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private languageService: AppComponent) {
    this.languageService.getCurrentLanguage();
    console.log(
      'Current language: ' + this.languageService.getCurrentLanguage()
    );
  }
  switchLang(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  ngOnInit(): void {}

  checklanguage(lang: string): boolean {
    return this.languageService.getCurrentLanguage() === lang;
  }
}

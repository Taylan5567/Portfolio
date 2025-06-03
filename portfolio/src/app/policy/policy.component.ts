import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor, CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss',
})
export class PolicyComponent {
  constructor(private languageService: AppComponent) {}
  switchLang(lang: string) {
    this.languageService.switchLanguage(lang);
  }
}

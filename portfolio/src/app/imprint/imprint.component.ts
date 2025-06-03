import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(private languageService: AppComponent) {}
  switchLang(lang: string) {
    this.languageService.switchLanguage(lang);
  }
}

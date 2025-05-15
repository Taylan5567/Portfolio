import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OnInit } from '@angular/core';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent,
    ReviewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    this.onHtmlLanguage('en');
    if (navigator.language === 'de') {
      this.onHtmlLanguage('de');
    }
  }

  //wichtig für später
  onHtmlLanguage(lang: string) {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', lang);
  }
}

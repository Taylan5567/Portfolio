import { Component } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  ngAfterViewInit() {
    const section = document.querySelector('.slide-trigger');

    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target); // Nur einmal animieren
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
    }
  }
}

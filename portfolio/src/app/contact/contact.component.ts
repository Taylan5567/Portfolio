import { Component, OnInit } from '@angular/core';
import { ContactformComponent } from './contactform/contactform.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactformComponent, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngAfterViewInit() {
    const section = document.querySelector('.slide-triggers');

    if (section) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
    }
  }
}

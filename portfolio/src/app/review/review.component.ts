import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
})
export class ReviewComponent {
  testimonials = [
    {
      name: 'V. Schuster',
      img: './../../assets/img/images/testemonial/first.png',
      text: "Taylan really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      pos: 'Team Partner',
    },
    {
      name: 'E.Eichinger',
      img: './../../assets/img/images/testemonial/second.png',
      text: 'Taylan was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.',
      pos: 'Team Partner',
    },
    {
      name: 'I.Nuber',
      img: './../../assets/img/images/testemonial/third.png',
      text: 'It was a great pleasure to work with Taylan. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well',
      pos: 'Frontend Engineer',
    },
  ];

  currentIndex = 0;

  get currentTestimonial(): {
    name: string;
    img: any;
    text: string;
    pos: string;
  } {
    return this.testimonials[this.currentIndex];
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  pop(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [
    FormsModule,
    MatCheckboxModule,
    TranslateModule,
    RouterLink,
    NgIf,
    CommonModule,
  ],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    checkbox: false,
  };

  constructor(private router: Router) {}

  mailTest = false;
  isSubmitting = false;
  submitSuccess = false;

  post = {
    endPoint: 'https://oezguer-taylan.umucu.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.isSubmitting = true;
      this.submitSuccess = false;

      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.isSubmitting = false;
            this.submitSuccess = true;
            ngForm.resetForm();

            setTimeout(() => {
              this.submitSuccess = false;
            }, 2000);
          },
          error: (error) => {
            this.isSubmitting = false;
            console.error(error);
          },
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('Scrolled to top');
  }
}

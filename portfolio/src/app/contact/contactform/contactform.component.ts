import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, MatCheckboxModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss',
})
export class ContactformComponent {
  contactData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    checkbox: false,
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    } else {
      console.log('Form is invalid or not submitted yet');
    }
  }
}

import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../header.component';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    NgIf,
  ],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss',
})
export class MobileHeaderComponent {
  isOpen = false;

  constructor(private languageService: AppComponent) {}

  checklanguage(lang: string): boolean {
    return this.languageService.getCurrentLanguage() === lang;
  }
  switchLang(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  toggleSidenav(): void {
    this.isOpen = !this.isOpen;
  }
  closeDrawer(): void {
    this.isOpen = false;
  }
}

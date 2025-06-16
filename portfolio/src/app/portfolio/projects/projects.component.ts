import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss', 
})
export class ProjectsComponent implements OnInit {
  
  ngOnInit(): void {
  }
  }

import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgFor, TranslateModule, TranslateService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {

  constructor(private translate: TranslateService) {}


  projects = [
    {
      title: 'Join',
      language: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: this.translate.instant('PROJECTS.JOIN'),
      image: './../../../assets/img/projects/join.png',
      url: 'https://oezguer-taylan.umucu.de/projects/Join/',
      github: 'https://github.com/Taylan5567/Join',
    },
    {
      title: 'El Pollo Loco',
      language: 'HTML | CSS | JavaScript',
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help to find coins and poison bottles to fight against the killer Chickens.',
      image: './../../../assets/img/projects/polloloco.png',
      url: 'https://oezguer-taylan.umucu.de/projects/elpolloloco/',
      github: 'https://github.com/Taylan5567/elpolloloco',
    },
    {
      title: 'Pokédex',
      language: 'JavaScript | HTML | CSS | Api',
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: './../../../assets/img/projects/pokedex.png',
      url: 'https://oezguer-taylan.umucu.de/projects/pokedex/',
      github: 'https://github.com/Taylan5567/Pokedex',
    },
  ];
}

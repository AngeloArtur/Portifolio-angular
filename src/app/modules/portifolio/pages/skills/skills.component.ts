import { Component, signal } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { ISkills } from '../../interface/ISkills.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  public arraySkills = signal<ISkills[]>([
    {
      src: 'assets/icons/html.svg',
      nameSkill: 'html',
      alt: 'Ícone de conhecimento em html'
    },
    {
      src: 'assets/icons/css.svg',
      nameSkill: 'css',
      alt: 'Ícone de conhecimento em css'
    },
    {
      src: 'assets/icons/javascript.svg',
      nameSkill: 'javascript',
      alt: 'Ícone de conhecimento em javascript'
    },
    {
      src: 'assets/icons/angular.svg',
      nameSkill: 'angular',
      alt: 'Ícone de conhecimento em angular'
    },
    {
      src: 'assets/icons/java.svg',
      nameSkill: 'java',
      alt: 'Ícone de conhecimento em java'
    },
    {
      src: 'assets/icons/spring-boot.svg',
      nameSkill: 'spring-boot',
      alt: 'Ícone de conhecimento em spring-boot'
    },
  ])
}

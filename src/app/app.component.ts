import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './modules/portifolio/components/header/header.component';
import { NavbarComponent } from './modules/portifolio/components/navbar/navbar.component';
import { SkillsComponent } from './modules/portifolio/pages/skills/skills.component';
import { ExperiencesComponent } from './modules/portifolio/pages/experiences/experiences.component';
import { PortfolioComponent } from './modules/portifolio/pages/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    SkillsComponent,
    ExperiencesComponent,
    PortfolioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-portifolio-angular';
}

import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portifolio/pages/home/home.component';
import { SkillsComponent } from './modules/portifolio/pages/skills/skills.component';
import { ExperiencesComponent } from './modules/portifolio/pages/experiences/experiences.component';
import { PortfolioComponent } from './modules/portifolio/pages/portfolio/portfolio.component';

export const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'skills', component: SkillsComponent },
    { path:'experiences', component: ExperiencesComponent },
    { path: 'portfolio', component:PortfolioComponent }
];

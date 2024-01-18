import { Component, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  public arrayProject = signal<IProject[]>([
    {
      src: 'assets/images/Projeto AutoBots.png',
      alt: 'Projeto desenvolvido para atividade escolar',
      width: '200px',
      height: '150px',
      description: '',
      links: {
        name: 'Projeto AutoBots',
        href: 'https://angeloartur.github.io/Projeto-AutoBots/login.html'
      }
    },
  ])
}

import { Component, inject, signal } from '@angular/core';
import { IProject } from '../../interface/IProject.interface';
import { MatDialog, MatDialogModule}  from '@angular/material/dialog';
import { EDIalogPanelCLass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../../components/dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  #dialog = inject(MatDialog);  

  public arrayProject = signal<IProject[]>([
    {
      src: 'assets/images/Projeto AutoBots.png',
      alt: 'Projeto desenvolvido para atividade escolar',
      title: 'Projeto AutoBots',
      width: '200px',
      height: '150px',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nam, nostrum quisquam placeat dolore animi, aperiam quibusdam fugiat error quam debitis optio dolores culpa ipsa accusamus exercitationem assumenda itaque atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quo fugit esse rerum, cupiditate, odit unde blanditiis eaque sapiente consequuntur maxime est sunt animi aperiam ratione provident nostrum porro dolorem.',
      links: [{
        name: 'Projeto AutoBots',
        href: 'https://angeloartur.github.io/Projeto-AutoBots/login.html'
      }]
    },
    {
      src: 'assets/images/Projeto AutoBots.png',
      alt: 'Projeto desenvolvido para atividade escolar',
      title: 'Projeto AutoBots',
      width: '200px',
      height: '150px',
      description: '',
      links: [{
        name: 'Projeto AutoBots',
        href: 'https://angeloartur.github.io/Projeto-AutoBots/login.html'
      }]
    },
    {
      src: 'assets/images/Projeto AutoBots.png',
      alt: 'Projeto desenvolvido para atividade escolar',
      title: 'Projeto AutoBots',
      width: '200px',
      height: '150px',
      description: '',
      links: [{
        name: 'Projeto AutoBots',
        href: 'https://angeloartur.github.io/Projeto-AutoBots/login.html'
      }]
    },
    {
      src: 'assets/images/Projeto AutoBots.png',
      alt: 'Projeto desenvolvido para atividade escolar',
      title: 'Projeto AutoBots',
      width: '200px',
      height: '150px',
      description: '',
      links: [{
        name: 'Projeto AutoBots',
        href: 'https://angeloartur.github.io/Projeto-AutoBots/login.html'
      }]
    },
    
  ])

  public openDialog(data: IProject) {
    this.#dialog.open( DialogProjectsComponent , {
      data,
      panelClass: EDIalogPanelCLass.Projects
    })
  }

  
}

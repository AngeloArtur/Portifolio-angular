import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong:'lorem ipsum',
        p:'Lorem ipsum dolor sit amet'
      },
      text:'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum fugit tempora veritatis quasi officiis. Excepturi provident, totam voluptatem ex deleniti nisi quis molestiae impedit cupiditate rem. Cumque, laboriosam aliquid?</p>',
    },
    {
      summary: {
        strong:'lorem ipsum',
        p:'Lorem ipsum dolor sit amet'
      },
      text:'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum fugit tempora veritatis quasi officiis. Excepturi provident, totam voluptatem ex deleniti nisi quis molestiae impedit cupiditate rem. Cumque, laboriosam aliquid?</p>',
    },
    {
      summary: {
        strong:'lorem ipsum',
        p:'Lorem ipsum dolor sit amet'
      },
      text:'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nostrum fugit tempora veritatis quasi officiis. Excepturi provident, totam voluptatem ex deleniti nisi quis molestiae impedit cupiditate rem. Cumque, laboriosam aliquid?</p>',
    }
  ])
}

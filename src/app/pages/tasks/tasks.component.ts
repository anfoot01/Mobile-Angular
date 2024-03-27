import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  public tasks = [
    {
      id: Date.now(),
      title: 'Daily astromeditation',
    },
    {
      id: Date.now(),
      title: 'Daily sleep astromeditation',
    },
    {
      id: Date.now(),
      title: 'Daily mantra',
    }
    
  ]
  public numbers = [
    {
      id: Date.now(),
      title: '3',
    },
    {
      id: Date.now(),
      title: '1',
    },
    {
      id: Date.now(),
      title: '2',
    }
    
  ]
}

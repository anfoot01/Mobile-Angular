import { Component } from '@angular/core';

@Component({
  selector: 'app-quetions',
  templateUrl: './quetions.component.html',
  styleUrl: './quetions.component.scss'
})
export class QuetionsComponent {
  public quetions = [
    {
      id: Date.now(),
      title: 'How was your day?',
    },
    {
      id: Date.now(),
      title: 'Current Transist: 3rd House',
    }
  ]
  public icons = [
    {
      id: Date.now(),
      title: 'calendar_today',
    },
    {
      id: Date.now(),
      title: 'schedule',
    }
  ]
}

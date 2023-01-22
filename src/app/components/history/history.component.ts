import { Component, Input } from '@angular/core';
import { Rating } from '../../Rating';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  @Input() ratings: Rating[] = [
    {rating: 2, dogURL: 'https://images.dog.ceo/breeds/frise-bichon/6.jpg'},
    {rating: 5, dogURL: 'https://images.dog.ceo/breeds/frise-bichon/6.jpg'}
  ];
  constructor() { 

  }
}

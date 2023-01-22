import { Component, Input, Inject } from '@angular/core';
import { Rating } from '../../Rating';
import { RatingComponent } from '../rating/rating.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  ratings: Rating[] = [
    {rating: 2, dogURL: 'https://images.dog.ceo/breeds/frise-bichon/6.jpg'}
  ];
  // https://material.angular.io/components/dialog/overview#sharing-data-with-the-dialog-component
  constructor(@Inject(MAT_DIALOG_DATA) public data: {ratings: Rating[]}) { 
    this.ratings = data.ratings;
  }
}

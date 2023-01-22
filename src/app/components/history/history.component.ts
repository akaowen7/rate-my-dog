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

  highestToLowest = true;
  buttonText = "Sort by lowest";

  // https://material.angular.io/components/dialog/overview#sharing-data-with-the-dialog-component
  constructor(@Inject(MAT_DIALOG_DATA) public data: {ratings: Rating[]}) { 
    this.ratings.sort((a, b) => {
      return a.rating - b.rating;
    });

    this.ratings = data.ratings;
  }

  toggleSort() {
    this.highestToLowest = !this.highestToLowest;
    this.buttonText = this.highestToLowest ? "Sort by highest" : "Sort by lowest";

    this.ratings = this.ratings.sort((a, b) => {
      return this.highestToLowest ? a.rating - b.rating : b.rating - a.rating;
    });
  }
}

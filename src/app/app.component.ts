import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DogService } from './services/dog.service';
import { NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { Rating } from './Rating';

import { HistoryComponent } from './components/history/history.component';
import { RatingComponent } from './components/rating/rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbRatingConfig],
})

export class AppComponent {
  title = 'rate-my-dog';
  dogImage : string = "";
  dogRate : number = 0;
  ratings : Rating[] = [];
  
  constructor(private dogService: DogService, config: NgbRatingConfig, public dialog: MatDialog) { 
    this.dogService.getDog().subscribe((dog: any) => {
      this.dogImage = dog["message"];
    });

    config.max = 5;
  }

  rateDog() {
    this.ratings.push({id: this.ratings.length, rating: this.dogRate, dogURL: this.dogImage});

    this.dogRate = 0;

    this.dogService.getDog().subscribe((dog: any) => {
      this.dogImage = dog["message"];
    });
  }

  toggleHistory() {
    const dialogRef = this.dialog.open(HistoryComponent, {
      // this is a bit sketchy
      width: '110vh',
      height:  '90vh',
      maxWidth: '110vh',
      maxHeight: '90vh',
      data: {ratings: this.ratings}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
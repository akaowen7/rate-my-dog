import { Component, Input } from '@angular/core';
import { Rating } from '../../Rating';
import { NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating : Rating = {rating: 0, dogURL: ""};
  five : number = 5;

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

}

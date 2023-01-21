import { Component } from '@angular/core';

import { DogService } from './services/dog.service';
import { NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

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
  
  constructor(private dogService: DogService, config: NgbRatingConfig) { 
    this.dogService.getDog().subscribe((dog: any) => {
      this.dogImage = dog["message"];
    });

    config.max = 5;
  }
}
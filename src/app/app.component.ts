import { Component } from '@angular/core';
import { DogService } from './services/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'rate-my-dog';
  dogImage : string = "";
  
  constructor(private dogService: DogService) { 
    this.dogService.getDog().subscribe((dog: any) => {
      this.dogImage = dog["message"];
    });
  }

}
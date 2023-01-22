import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { breeds }  from '../../Breeds';

@Component({
  selector: 'app-breed-selector',
  templateUrl: './breed-selector.component.html',
  styleUrls: ['./breed-selector.component.css']
})
export class BreedSelectorComponent {
  
  breedsList : string[] = breeds;
  searchValue : string = "";

  constructor(public dialogRef: MatDialogRef<BreedSelectorComponent>) { }

  ngOnInit(): void {
  }

  selected(breed: string){
    this.dialogRef.close(breed);
  }

  filterBreeds(e: string){
    let search = e.toLowerCase();
    this.breedsList = breeds.filter((breed) => {
      return breed.toLowerCase().includes(search);
    });
  }
}

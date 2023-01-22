import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  dogUrl = "https://dog.ceo/api/breeds/image/random"

  constructor(private http: HttpClient) { }

  getDog(): Observable<any> {
    return this.http.get(this.dogUrl);
  }

  getDogByBreed(breed: string): Observable<any> {
    return this.http.get("https://dog.ceo/api/breed/" + breed + "/images/random");
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private http: HttpClient) {}

  getRecommendationWine(): Observable<any> {
    try {
      return this.http
        .get(
          `${environment.url}food/wine/recommendation?wine=rose_wine&wine=merlot&wine=red_wine&number=50&apiKey=${environment.apiKey}`
        )
        .pipe(
          map((request) => {
            return request;
          })
        );
    } catch (error) {
      console.error(error);
    }
  }
}

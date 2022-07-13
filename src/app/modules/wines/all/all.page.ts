import { Component, OnInit } from '@angular/core';
import { WineService } from 'src/app/services/wine/wine.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  dataAllWines: any;
  validateAllWines: boolean;
  constructor(private wineService: WineService) {}

  ngOnInit() {
    this.getAllWines();
  }

  async getAllWines() {
    try {
      await this.wineService.getRecommendationWine().subscribe((response) => {
        if (response.totalFound !== 0) {
          this.validateAllWines = true;
          this.dataAllWines = response.recommendedWines;
        } else {
          this.validateAllWines = false;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
}

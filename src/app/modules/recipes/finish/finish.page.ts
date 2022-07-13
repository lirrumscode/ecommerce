import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe/recipe.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {
  dataFinish: any;
  constructor(private storageService: StorageService, private router: Router) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.getRecipeData();
  }
  async getRecipeData() {
    try {
      await this.storageService.get('data').then((response) => {
        this.dataFinish = response;
        console.log(this.dataFinish);
      });
    } catch (error) {
      console.error(error);
    }
  }
  async goToDetail(items: number) {
    try {
      await this.router.navigate(['home/detail/', items]);
    } catch (error) {
      console.error(error);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { WineService } from 'src/app/services/wine/wine.service';
import { Wine } from 'src/app/interfaces/wine-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dataRandomRecipes: any;
  dataAllRecipes: any;
  slideOpts: any;
  slideOptsOne: any;
  objDataMenusItems: any;
  squeletonLoading: boolean;
  dataRecomendationWines: Array<Wine>;
  validateRecomendationsWine: boolean;
  constructor(
    private apiService: ApiService,
    private wineService: WineService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.setDefaultValues();
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.squeletonLoading = true;
      this.getRandomRecipes();
      this.getAllRecipes();
      this.getRecommendationsWine();
    }, 1000);
    this.squeletonLoading = false;
  }

  setDefaultValues() {
    this.slideOpts = {
      initialSlide: 0,
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 1000,
      autoplay: true,
      zoom: false,
    };
    this.slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 10,
      speed: 1000,
      autoplay: false,
      zoom: false,
    };
    this.objDataMenusItems = [
      {
        url: 'assets/images/food2.png',
        slug: 'curry',
        name: 'Curry',
        color: '#FF5055',
        colorOne: '#FFDBDC',
      },
      {
        url: 'assets/images/food3.png',
        slug: 'snacks',
        name: 'Snacks',
        color: '#FF9B15',
        colorOne: '#FFE2BB',
      },
      {
        url: 'assets/images/food4.png',
        slug: 'drinks',
        name: 'Drinks',
        color: '#FF3F3F',
        colorOne: '#FFBBBB',
      },
      {
        url: 'assets/images/food5.png',
        slug: 'dessert',
        name: 'Dessert',
        color: '#0CA300',
        colorOne: '#C0FFBB',
      },
    ];
  }

  async getRandomRecipes() {
    try {
      await this.apiService.getRandomRecipes().subscribe((response) => {
        this.dataRandomRecipes = response.recipes;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getAllRecipes() {
    try {
      await this.apiService.getAllRecipes().subscribe((response) => {
        this.dataAllRecipes = response.results;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async goModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        id: id,
      },
    });
    return await modal.present();
  }

  async getRecommendationsWine() {
    try {
      await this.wineService.getRecommendationWine().subscribe((response) => {
        if (response.totalFound !== 0) {
          this.dataRecomendationWines = response.recommendedWines;
          this.validateRecomendationsWine = true;
        } else {
          this.validateRecomendationsWine = false;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  goToSeeMoreWines() {
    this.router.navigateByUrl('/wines/all');
  }
  goSeeMore() {
    this.router.navigateByUrl('/home/all');
  }

  goToDetail(items) {
    this.router.navigate(['home/detail', items.id]);
  }

  goMenuItems(items: any) {
    this.router.navigate(['home/menu', items.slug]);
  }
}

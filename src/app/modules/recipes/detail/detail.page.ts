import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  id: number;
  dataDetail: any;
  dataSimilar: any;
  slideOpts: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private toastController: ToastController,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params[`id`];
    });
    this.getDetail(this.id);
    this.getSimilar(this.id);
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
  }

  async getDetail(id: number) {
    try {
      await this.apiService.getDetailRecipes(id).subscribe((response) => {
        this.dataDetail = response;
      });
    } catch (err) {
      console.error(err);
    }
  }

  async getSimilar(id: number) {
    try {
      await this.apiService.getSimilarRecipes(id).subscribe((response) => {
        this.dataSimilar = response;
        console.log(this.dataSimilar);
      });
    } catch (err) {
      console.error(err);
    }
  }
  goToDetail(item: any) {
    this.router.navigate(['home/detail/', item.id]);
  }

  async goFinishedRecipe(items: any) {
    try {
      await this.recipeService.addRecipe(items);
    } catch (error) {
      console.error(error);
    }
  }
}

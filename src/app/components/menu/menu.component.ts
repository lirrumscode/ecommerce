import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { RecipeService } from 'src/app/services/recipe/recipe.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private alertController: AlertController,
    private recipeService: RecipeService
  ) {}
  goAboutMe() {
    this.router.navigateByUrl('/about');
  }

  async goRandom() {
    try {
      this.apiService.getRandomJoke().subscribe((response) => {
        this.alertShow(response['text']);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async goTrivia() {
    try {
      this.apiService.getRandomTriviaJoke().subscribe((response) => {
        this.alertShow(response['text']);
      });
    } catch (err) {
      console.error(err);
    }
  }
  async alertShow(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: `${msg}`,
      buttons: ['OK'],
    });
    await alert.present();
  }

  goVideos() {
    this.router.navigateByUrl('videos');
  }

  async goExit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert!',
      message: '¿Do you really exit from <strong>RecetApp?</strong>',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {},
        },
        {
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl('/splash');
          },
        },
      ],
    });

    await alert.present();
  }

  goFinishRecipe() {
    this.router.navigateByUrl('/finish');
  }
}

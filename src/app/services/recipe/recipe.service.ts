import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  addDataRecipe = [];
  constructor(private toastController: ToastController, private storageService: StorageService) {}

  async toastMessage(msg: any) {
    const toast = await this.toastController.create({
      message: `${msg}`,
      duration: 2000,
      mode: 'ios',
      position: 'bottom',
    });
    toast.present();
  }

  addRecipe(data: any) {
    try {
      if (data) {
        this.addDataRecipe.push(data);
        this.storageService.set("data", this.addDataRecipe);
        this.toastMessage('Recipe was add successfully!');
      } else {
        this.toastMessage("Recipe wasn't add, please try later");
      }
    } catch (error) {
      console.error(error);
    }
  }

  getRecipe() {
    return this.addDataRecipe;
  }

}

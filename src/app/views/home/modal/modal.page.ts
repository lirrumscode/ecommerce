import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() id: number;
  dataCard: any;
  validateDataCard: boolean;
  constructor(
    private apiService: ApiService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}
  ionViewDidEnter() {
    this.getCardRecipes();
  }

  async getCardRecipes() {
    try {
      await this.apiService.getMenuItemsById(this.id).subscribe((response) => {
        if (response) {
          this.validateDataCard = true;
          this.dataCard = response;
          console.log(response);
        } else {
          this.validateDataCard = false;
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  dismissModal() {
    this.modalCtrl.dismiss();
  }
}

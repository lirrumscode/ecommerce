import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api/api.service';
import { ModalPage } from 'src/app/views/home/modal/modal.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  item: string;
  dataItems: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.item = params[`id`];
    });
    this.getMenuItems(this.item);
  }

  async getMenuItems(items: string) {
    try {
      await this.apiService.getMenuItems(items).subscribe((response) => {
        this.dataItems = response.menuItems;
        console.log(this.dataItems);
      });
    } catch (err) {
      console.error(err);
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

  goToAll(item) {
    this.router.navigate(['menu/all/', item]);
  }
}

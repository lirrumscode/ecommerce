import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  item: any;
  dataAllMenus: any;
  validateDataAllMenus: boolean;
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.item = params[`id`];
    });
    this.getRecipesDesserts();
  }

  async getRecipesDesserts() {
    try {
      await this.apiService
        .getRecipeDesserts(this.item)
        .subscribe((response) => {
          if (response.totalResults !== 0) {
            this.dataAllMenus = response.results;
            this.validateDataAllMenus = true;
          } else {
            this.validateDataAllMenus = false;
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  async goToDetail(items) {
    try {
      await this.router.navigate(['home/detail/', items]);
    } catch (error) {
      console.error(error);
    }
  }
}
